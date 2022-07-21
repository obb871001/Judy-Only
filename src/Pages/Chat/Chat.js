import React, { useState,useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatRoom from './ChatRoom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { async } from '@firebase/util';

firebase.initializeApp({
    apiKey: "AIzaSyB3MYqOndeZD3TEjAkJFp9t93MQT0kSCz0",
    authDomain: "mychat-7b508.firebaseapp.com",
    projectId: "mychat-7b508",
    storageBucket: "mychat-7b508.appspot.com",
    messagingSenderId: "263827887615",
    appId: "1:263827887615:web:996c2c9cc213221e8d03ca",
    measurementId: "G-BDHXK46C45"
})

const auth =firebase.auth();
const firestore = firebase.firestore();

function SignIn(){
    const signInWithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

    return(
        <div style={{paddingTop:"80px"}}>
            <button onClick={signInWithGoogle}>寶寶先登入 登入頁面我還沒設計:3 愛寶寶</button>
        </div>
    )
}

function SignOut(){
    return auth.currentUser && (
        <button onClick={()=>auth.signOut()}>Sign Out</button>
    )
}

function ChatRooom (){
    const dummy = useRef();
    const messeagesRef = firestore.collection('messages');
    const query =  messeagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField:'id'});
    const [formValue,setFormValue] = useState('');
    function down(){
        dummy.current.scrollIntoView({behavior:'smooth'})
    }

    const sendMessage = async(e)=>{
        e.preventDefault();

        
        const {uid ,photoURL} = auth.currentUser;

        await messeagesRef.add({
            text:formValue == '' ? null : formValue,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({behavior:'smooth'})
    }
    return(
        <>
        <div style={{paddingBottom:"70px",paddingTop:"75px"}}>
            {messages && messages.map(
                msg =>   
                <ChatMsg key={msg.id} messages={msg} />
            )}
            <div ref={dummy}></div>
        </div>

        <div className='position-fixed bottom-0 w-100 px-2 bg-light d-flex align-items-center' style={{height:"70px"}}>
            <form onSubmit={sendMessage} className="w-100">
                <input className='w-75 border-0 p-2' style={{background:"#fff"}} placeholder="輸入文字" value={formValue} onChange={(e)=>setFormValue(e.target.value)} />
                <button className='btn w-25 btn-primary' type="button">send</button>
            </form>
        </div>
        
        <div className='d-flex align-items-center bg-white justify-content-center position-fixed rounded-circle border' style={{width:"50px",height:"50px",zIndex:"999999",bottom:"80px",right:"43%"}} onClick={down}>
            <FontAwesomeIcon style={{fontSize:"20px"}} icon={faAngleDown}/>
        </div>
        </>
    )

} 
function ChatMsg(props){
    const { text,uid,photoURL } = props.messages;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'reveived';

    return <div className={messageClass}>
                <img src={photoURL}/>
                <p>{text}</p>
            </div>
}

const Chat = () =>{

    const [user] = useAuthState(auth)
    return(
        <div>
            {user ? <ChatRooom /> : <SignIn />}
        </div>
    )
}

export default Chat