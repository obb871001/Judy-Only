import React from "react";
import styled from "@emotion/styled";
import RandomPhoto from "./Photo.json"
import Photo1 from "./../images/OurImages/IMG_0001.jpg"
import Photo2 from "./../images/OurImages/IMG_0002.jpg"
import Photo3 from "./../images/OurImages/IMG_0003.jpg"
import Photo4 from "./../images/OurImages/IMG_159.webp"
import Photo5 from "./../images/OurImages/IMG_1955.jpg"
import Photo6 from "./../images/OurImages/IMG_3732.jpg"
import Photo7 from "./../images/OurImages/IMG_3744.jpg"
import Photo8 from "./../images/OurImages/IMG_4582.jpg"
import Photo9 from "./../images/OurImages/IMG_4615.webp"
import Photo10 from "./../images/OurImages/IMG_4879.jpg"
import Photo11 from "./../images/OurImages/IMG_4883.jpg"
import Photo12 from "./../images/OurImages/IMG_4885.jpg"
import Photo13 from "./../images/OurImages/IMG_4952.jpg"
import Photo14 from "./../images/OurImages/IMG_5044.jpg"
import Photo15 from "./../images/OurImages/IMG_5319.jpg"
import Photo16 from "./../images/OurImages/IMG_5548.jpg"
import Photo17 from "./../images/OurImages/IMG_5679.jpg"
import Photo18 from "./../images/OurImages/IMG_6816.jpg"
import Photo19 from "./../images/OurImages/IMG_6900.jpg"
import Photo21 from "./../images/OurImages/IMG_6905.jpg"
import Photo22 from "./../images/OurImages/IMG_7340.jpg"
import Photo23 from "./../images/OurImages/IMG_7344.jpg"
import Photo24 from "./../images/OurImages/IMG_8059.jpg"
import Photo25 from "./../images/OurImages/IMG_8167.jpg"
import Photo26 from "./../images/OurImages/IMG_8696.jpg"
import Photo27 from "./../images/OurImages/IMG_8906.webp"
import Photo28 from "./../images/OurImages/IMG_8930.jpg"
import Photo29 from "./../images/OurImages/IMG_8990.webp"
import Photo30 from "./../images/OurImages/IMG_9082.jpg"
import Photo31 from "./../images/OurImages/IMG_9447.jpg"
import Photo32 from "./../images/OurImages/IMG_9449.jpg"
import Photo33 from "./../images/OurImages/IMG_9451.jpg"
import Photo34 from "./../images/OurImages/IMG_9452.jpg"
import Photo35 from "./../images/OurImages/IMG_9453.jpg"
import Photo36 from "./../images/OurImages/IMG_9464.jpg"
import Photo37 from "./../images/OurImages/IMG_9519.webp"
import Photo38 from "./../images/OurImages/IMG_9635.jpg"
import Photo39 from "./../images/OurImages/IMG_9822.jpg"

var array = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
    Photo10,
    Photo11,
    Photo12,
    Photo13,
    Photo14,
    Photo15,
    Photo16,
    Photo17,
    Photo18,
    Photo19,
    Photo21,
    Photo22,
    Photo23,
    Photo24,
    Photo25,
    Photo26,
    Photo27,
    Photo28,
    Photo29,
    Photo30,
    Photo31,
    Photo32,
    Photo33,
    Photo34,
    Photo35,
    Photo36,
    Photo37,
    Photo38,
    Photo39
]

console.log(RandomPhoto.photo.length)
const PhotoSelector = styled.div`
    :active{
        transform:translateY(5px);
    }
    transition:.3s all ;
    border-radius:25px;
    border: 2px solid #ababab;
    overflow:hidden;

    img{
        position:absolute;
        width:100%;
        height:100%;
        object-fit: cover;
        top:0;
        left:0;
        border-radius:22px;
        // animation: photoAnimation 3s alternate infinite;
    }
    @keyframes photoAnimation{
        0%{transform:scale(1.07)}
        100%{transform:scale(1)}
    }
`
const RemainDay = styled.div`

    border-radius:25px;
    width: 37% !important;
    section{
        :active{
            transform:translateY(5px);
          }
        transition:.3s all ;        
        height:46% !important;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        border-radius:25px;
    }
    img{
        width:30px;
    }
    p{
        color:#fff;
        letter-spacing: 2px;
        font-size:20px;
    }
`
var nowdate = new Date();
var KuoBirthday = new Date("2022/10/01");
var JudyBirthday = new Date("2023/04/24");

const KuoleftDay = Math.floor((KuoBirthday - nowdate)/(1000 * 3600 * 24));
const JudyleftDay = Math.floor((JudyBirthday - nowdate)/(1000 * 3600 * 24));
const PhotoNum = RandomPhoto.photo.length
function getRandomInt(e) {
    return Math.floor(Math.random() * e);
}
const photoLength = array.length;
function changePhoto(){
    var thisPhotoNum = getRandomInt(photoLength);
    localStorage.setItem('changeIMG',array[thisPhotoNum])
    document.getElementById('changeImg').src =  array[thisPhotoNum];
    if(thisPhotoNum == 28){
        alert('這張太辣了，請跳過ˋˊ')
    }
}
const Photo = () =>{
    return(
        <section className="px-3 mb-2">
            <div className="d-flex justify-content-between" style={{height:"220px"}}>
                <PhotoSelector className="col-7 h-100 p-3 position-relative shadow"  onClick={changePhoto}>
                    <img id="changeImg" src={localStorage.changeIMG} />
                </PhotoSelector>
                <RemainDay className="col-3 h-100 d-flex flex-column justify-content-between">
                    <section className="w-100 p-3 shadow" style={{background:"#e0be99",border:"2px solid #bfa07e"}}>
                        <div className="d-flex">
                            <img src={require('./../images/user.png')}/>
                            <img src={require('./../images/birthday-cake.png')}/>
                        </div>
                        <p className="mb-0">
                            {KuoleftDay}天
                        </p>
                    </section>
                    <section className="w-100 p-3 shadow" style={{background:"#749da1",border:"2px solid #628589"}}>
                        <div className="d-flex">
                            <img src={require('./../images/woman.png')}/>
                            <img src={require('./../images/birthday-cake.png')}/>
                        </div>
                        <p className="mb-0">
                            {JudyleftDay}天
                        </p>

                    </section>
                </RemainDay>
            </div>  
        </section>
    )
}
export default Photo