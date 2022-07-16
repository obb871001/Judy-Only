import React, { useState } from 'react';
import styled from '@emotion/styled';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';

const Add = styled.div`
    height:445px;
    border-radius:25px;
    background:#dcc7a1;
    border:2px solid #ffe8c0;
    textarea,input{
        border-radius:15px;
        border:2px solid #ffe8c0;

    }
    textarea:active{
    }
    button{
        background:#998a6f;
        width:40%;
        color:#fff;
    }
    button:active,button:focus{
        border:unset;
        shadow:unset;
        color:#fff;
    }
`


const AddNote = ({setOpen,addNote,note,setNote}) =>{
    const [noteText,setNoteText] = useState('');
    const [noteTitle,setNoteTitle] = useState('');
    const inputNote = (event) => {
        setNoteText(event.target.value)
    }
    const inputTitle = (e) =>{
        setNoteTitle(e.target.value);
    }
    const handleSaveClick = () =>{
        const date = new Date();
        const newNote = {
            id:nanoid(),
            title:noteTitle,
            content:noteText,
            time:date.toLocaleDateString()
        };
        const newNotes = [...note,newNote];
        if(noteText.length < 1 || noteText.length < 1 ){
            setOpen('');
        }else{
            setNote(newNotes);
            setOpen('');
        }
        
    }
    
    return(
        <section className="w-100 h-100 position-fixed top-0 start-0 d-flex align-items-center justify-content-center">
            <div className="w-100 h-100" style={{background:"rgb(0,0,0,0.5)"}}></div>
            <motion.div
            initial={{ opacity: 0, scale: 1,y:"100%" }}
            animate={{ opacity: 1, scale: 1,y:"0%"}}
            transition={{ duration: 0.3  }}                 
            className="w-100 position-absolute px-3">
                <Add className='w-100 p-3'>
                    <h4 className='text-center'>新增記事</h4>
                    <input className='w-100 py-2 px-3 mb-2' placeholder='輸入標題' onChange={inputTitle}></input>
                    <textarea id="testarea" className='w-100 p-3' placeholder='輸入狗狗記事' style={{height:"60%"}} onChange={inputNote}>

                    </textarea>
                    <small className='text-danger'>*兩欄位都要輸入</small>
                    <div className='d-flex align-items-center justify-content-center mt-3'>
                        <button className='btn mx-auto text-white' onClick={handleSaveClick}>
                            確認
                        </button>
                        <button className='btn mx-auto text-white' onClick={()=>setOpen('')}>
                            取消
                        </button>
                    </div>
                </Add>
            </motion.div>
        </section>
    )
};

export default AddNote;

