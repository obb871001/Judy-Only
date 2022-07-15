import React from "react";
import {useState} from "react"
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import NoteEdit from "./NoteArray";

const NoteCard = styled.div`
    border-radius:25px;
    background:#998a6f;
    border: 2px solid #bea068;

    section:nth-child(1){
        background:#fefae0;
        border-top-left-radius:25px;
        border-top-right-radius:25px;
        h4{
            color:#6f6450;
        }
        h4::after{
            content:"";
            width:75vw;
            height:2px;
            position:absolute;
            background:#bea068;
            bottom:-3px;
            left:28px;
        }    
    }
    .note-content{
        svg{
            font-size:20px;
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
        {
            title:"標題1",
            time:"2022-07-14"
        },
        {
            title:"標題2",
            time:"2022-07-13"
        },
    ]);
    return(
        <section class="px-3 mb-2">
            <NoteCard className="w-100" style={{height:"250px"}}>
                <section className="w-100 px-3 py-2 d-flex align-items-center" style={{height:"20%"}}>
                    <h4 className="mb-0 position-relative"><FontAwesomeIcon icon={faPen}/> Note</h4>
                </section>
                <section className="w-100 px-3 py-2" style={{height:"80%"}}>
                    <NoteEdit note={note}/>
                </section>
            </NoteCard>
        </section>
    )
}
export default Note;