import React from "react";
import {useState,useEffect} from "react"
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NoteEdit from "./NoteArray";
import { nanoid } from "nanoid";
import AddNote from "./AddNote";
import NoteDetail from "./Notedetail";

const NoteCard = styled.div`
    border-radius:25px;
    background:#998a6f;
    border: 2px solid #bea068;

    section:nth-child(1){
        background:#fefae0;
        border-top-left-radius:25px;
        border-top-right-radius:25px;
        h4,svg{
            color:#6f6450;
        }
        svg{
            font-size:20px;
        }
        // h4::after{
        //     content:"";
        //     width:75vw;
        //     height:2px;
        //     position:absolute;
        //     background:#bea068;
        //     bottom:-3px;
        //     left:28px;
        // }    
    }
    .note-content{
        svg{
            font-size:22px;
            color:#6f6450;
        }
        p{
            font-size:14px;
            color:#fff;
            margin-bottom:0;
        }
        h6{
            color:#fff;
            margin-bottom:0;
        }
    }

`

const Note = () =>{


    const [note, setNote] = useState([
    ]);

    const addNote = (text) =>{
        console.log(text)
    }

    const [open,setOpen] = useState('');

    useEffect(()=>{
        const saved = JSON.parse(localStorage.getItem('Note'));

        if(saved){
            setNote(saved);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('Note',JSON.stringify(note))
    },[note])



    return(
        <section class="px-3 mb-2">
            <NoteCard className="w-100">
                <section className="w-100 px-3 py-2 d-flex align-items-center justify-content-between" style={{height:"20%"}}>
                    <h4 className="mb-0"><FontAwesomeIcon icon={faPen}/> Note</h4>
                    <FontAwesomeIcon icon={faPlus} onClick={()=>setOpen('AddCard')} />
                </section>
                <section className="w-100 px-3 py-2" style={{height:"80%",minHeight:"250px",maxHeight:"250px",overflow:"scroll"}}>
                    <NoteEdit note={note} addNote={addNote} setNote={setNote} setOpen={setOpen} open={open}/>
                </section>
            </NoteCard>
            {open == 'AddCard' ? <AddNote setOpen={setOpen} addNote={addNote} note={note} setNote={setNote}/>  : null}            
        </section>
    )
}
export default Note;