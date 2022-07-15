import React from "react";
import styled from "@emotion/styled";
import CuteCard from "./CuteCard";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faBone } from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Col = styled.div`
    :active{
        transform:translateY(5px);
    }
    transition:.3s all ;
    >div{
        border-radius:25px;
        border:2px solid #b19595;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    svg{
        width:30px;
        height:30px;
        color:#fffaf5;
    }
`


const MainSection = ({setshowCard}) =>{
    return(
        <section className="px-3 d-flex mb-2" style={{height:"88px"}}>
            <Col className="col-3 h-100 p-2" onClick={()=>setshowCard('card')}>
                <div className="w-100 h-100 shadow" style={{background:"#BFBAB5"}}>
                    <FontAwesomeIcon icon={faGift} />
                </div>
            </Col>
            <Col className="col-3 h-100 p-2">
                <div className="w-100 h-100 shadow" style={{background:"#BFBAB5"}}>
                    <FontAwesomeIcon icon={faPhoneFlip} />
                </div>
            </Col>
            <Col className="col-3 h-100 p-2">
                <div className="w-100 h-100 shadow" style={{background:"#BFBAB5"}}>
                    <FontAwesomeIcon icon={faBone} />
                </div>
            </Col>
            <Col className="col-3 h-100 p-2">
                <div className="w-100 h-100 shadow" style={{background:"#BFBAB5"}}>
                    <FontAwesomeIcon icon={faWind} />
                </div>
            </Col>
        </section>
    )
}

export default MainSection