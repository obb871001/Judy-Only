import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const Link = styled.div`
`

const NoteEdit = ({note}) =>{
    return (
        note.map((item)=>(
            <Link className="">
                <div className="note-content py-2 d-flex">
                    <FontAwesomeIcon icon={faPaw} className="me-2" />
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <h6>{item.title}</h6>
                        <p>{item.time}</p>
                    </div>
                    </div>
            </Link>

        ))
    )
}

export default NoteEdit;