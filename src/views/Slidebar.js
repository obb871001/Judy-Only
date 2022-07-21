import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Item = styled.div`
    list-style:none;
    height:50px;
    display:flex;
    align-items:center;
    border-bottom:1px solid #e2e2e2;
    svg{
        color:#526581;
        font-size: 16px;
    }
    p{
        color:#526581;
    }
`
const variants = {
    open: { opacity: 1,x:"0px"},
    closed: { opacity: 0,x:"200px"},
  }

const slidebar = [
    {
        "title":"主頁",
        "icon":faHouse,
        "link":"/Judy-Only/"
    },
    {
        "title":"聊天室",
        "icon":faDog,
        "link":"/Chat"
    },
]

const Slidebar = ({setIsOpen,isOpen}) =>{
    return(
        <motion.nav 
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="position-fixed top-0 end-0 h-100 d-flex flex-column py-4 px-3 bg-light shadow" style={{zIndex:"9999",width:"200px",background:"#fafafa !important"}}>
                <FontAwesomeIcon icon={faXmark} className="align-self-end" onClick={()=>setIsOpen(false)} style={{display:isOpen == false ?"none":""}} />
                {slidebar.map((item,key) => 
                    <Link to={item.link} key={key}>
                        <Item>
                            <FontAwesomeIcon icon={item.icon} className="me-2" />
                            <p className="mb-0">{item.title}</p>
                        </Item>                
                    </Link>
                    )}
        </motion.nav>
    )
}
export default Slidebar