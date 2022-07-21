import React, { useState,useEffect } from 'react';
import {db} from './../../firebase'
import {collection,getDocs} from 'firebase/firestore'

const ChatRoom = () =>{
    const [messages,setMessages] = useState([]);
    const MsgCollectionRef = collection(db,'messages')
    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(25).onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    },[])

    return(
        <div>
           {messages.map(({id,text,photoURL})=>(
            <div key={id}>
                <img src={photoURL} />
                <p>{text}</p>
            </div>
           ))}
        </div>
    )
}

export default ChatRoom