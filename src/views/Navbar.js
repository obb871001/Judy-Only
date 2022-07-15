import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import Slidebar from "./Slidebar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';


const Nav = styled.div`
    height:70px;

    img{
        width:50px;
        height:50px;
        border-radius:50%;
    }
    svg{
        font-size:21px;
        color:#4c4c4c;
    }
`


const Navbar = ({setshowCard}) =>{
    const [showSlide,setshowSlide] = useState('false');
    const [isOpen, setIsOpen] = useState(false)
    return(
        <Nav className="px-3 pt-3 d-flex align-items-center justify-content-between">
            <div className="d-flex">
                <img className="me-2" src={require('./../images/ouricon.jpg')} />
                <div>
                    <p className="small text-light-gray mb-1">Good Moring Baby</p>
                    <h6>Judy Hsieh</h6>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faBell} className="me-3"/>
                <FontAwesomeIcon icon={faBars} onClick={()=>setIsOpen(true)}/>
            </div>
            <Slidebar setIsOpen={setIsOpen} isOpen={isOpen}  /> 
        </Nav>
    )
}

export default Navbar;