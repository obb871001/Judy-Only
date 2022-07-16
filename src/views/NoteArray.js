import React ,{useState}from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import NoteDetail from "./Notedetail";

const Note = styled.div`
`

const NoteEdit = ({setOpen,note , addNote,setNote,open}) =>{
    const [clickNote,setClickNote] = useState([])
    const deleteNote = (id)=>{
        const newNotes =  note.filter((note)=> note.id != id);
        setNote(newNotes);
     }
    
    const clickShow = (e,key) =>{
        setOpen('NoteDetail');
        const thisNote = note[key];
        setClickNote(thisNote)
        console.log(clickNote)
    }

    return (
        note.map((item,key)=>(
            <Note key={item.id} id={item.id} className="">
                <div onClick={e =>clickShow(e,key)} className="note-content py-2 d-flex">
                    <FontAwesomeIcon icon={faPaw} className="me-2" />
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <h6>{item.title}</h6>
                        <div className="d-flex">
                            <p className="me-2">{item.time}</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faTrash}  onClick={()=>deleteNote(item.id)}/>
                </div>
                {open == 'NoteDetail' ? <NoteDetail clickNote={clickNote} note={note} setNote={setNote} setOpen={setOpen} clickShow={clickShow}/>  : null}
            </Note>

        ))
    )
}

export default NoteEdit;