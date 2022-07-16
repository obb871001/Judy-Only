import React, { useEffect } from 'react';
import styled from '@emotion/styled';

const Add = styled.div`
    height:400px;
    border-radius:25px;
    background:#dcc7a1;
    border:2px solid #ffe8c0;
    textarea{
        border-radius:15px;
        border:2px solid #ffe8c0;
        background: #f0f0f0;
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


const NoteDetail = ({note,setNote,setOpen,clickShow,clickNote}) =>{
    return(

        <section className="w-100 h-100 position-fixed top-0 start-0 d-flex align-items-center justify-content-center">
        <div className="w-100 h-100" style={{background:"rgb(0,0,0,0.5)"}}></div>
        <div className="w-100 position-absolute px-3">
            <Add className='w-100 p-3'>
                <h4 className='text-center'>{clickNote.title}</h4>
                <textarea id="testarea" className='w-100 h-75 p-3' placeholder='' disabled>
                {clickNote.content}
                </textarea>
                <div className='d-flex align-items-center justify-content-center mt-3'>
                    <button className='btn mx-auto text-white' onClick={()=>setOpen('')}>
                        取消
                    </button>
                </div>
            </Add>
        </div>
        </section>

    );
};

export default NoteDetail;