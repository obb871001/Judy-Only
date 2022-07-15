import React from "react";
import { useState,useEffect } from "react";
import styled from "@emotion/styled";

import poop from "./../images/cardImages/poop.png";
import poopgreen from "./../images/cardImages/poopgreen.png";
import pooppink from "./../images/cardImages/pooppink.png";
import goldpoop from "./../images/cardImages/goldpoop.png";
import starbucks from "./../images/cardImages/coffee-cup.png"
import dollar from "./../images/cardImages/dollar.png"
import angry from "./../images/cardImages/angry.png"
import sword from "./../images/cardImages/sword.png"
import swordbuff from "./../images/cardImages/sword-buff.png"
import profit from "./../images/cardImages/profits.png"
import profit500 from "./../images/cardImages/money.png"
import profit1000 from "./../images/cardImages/money-bag.png"
import givemoney from "./../images/cardImages/insolvent.png"
import noangry from "./../images/cardImages/affection.png"
import ig from "./../images/cardImages/instagram.png"
import ticket from "./../images/cardImages/train-ticket.png"
import uberfood from "./../images/cardImages/fast-food.png"
import shopping from "./../images/cardImages/shopping-bag.png"
import dogbone from "./../images/cardImages/zeroa.png"
import dogfood from "./../images/cardImages/snack.png"
import dogbless from "./../images/cardImages/corgi.png"


const Card = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    top:0%;
    left:0;
    .card{
        border-radius:25px;
        width:90%;
        
    }
    .card-back{ 
        transform: rotateY(0deg);
        transition:all 2s;
        // &:hover {
        //     transform: rotateY(180deg);
        // }
        // &:hover .card-front{
        //     transform: rotateY(0deg);
        // }
        div{
            border-radius:15px;
            background-color: #A0CED9;
            opacity: 1;
            background-image:  linear-gradient(135deg, #FCF5C7 25%, transparent 25%), linear-gradient(225deg, #FCF5C7 25%, transparent 25%), linear-gradient(45deg, #FCF5C7 25%, transparent 25%), linear-gradient(315deg, #FCF5C7 25%, #A0CED9 25%);
            background-position:  22px 0, 22px 0, 0 0, 0 0;
            background-size: 44px 44px;
            background-repeat: repeat;
            
    
        }
        
    }
    .card-front{ 
        transform: rotateY(180deg);
        transition:transform 2s;

        // &:hover {
        //     transform: rotateY(180deg);
        // }
        >.card-front-bg{

        }

        >div{
            background-color: #A0CED9;
            border-radius:15px;
            // opacity: 1;
            // background-image:  linear-gradient(135deg, #c3e0e8 25%, transparent 25%), linear-gradient(225deg, #c3e0e8 25%, transparent 25%), linear-gradient(45deg, #c3e0e8 25%, transparent 25%), linear-gradient(315deg, #c3e0e8 25%, #A0CED9 25%);
            // background-position:  13px 0, 13px 0, 0 0, 0 0;
            // background-size: 13px 13px;
            // background-repeat: repeat;

    
        }

`
const cardContent = [
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨綠色大便",
        "star":"★",
        "img":[poopgreen],
    },
    {
        "title":"一坨綠色大便",
        "star":"★",
        "img":[poopgreen],
    },
    {
        "title":"一坨綠色大便",
        "star":"★",
        "img":[poopgreen],
    },
    {
        "title":"一坨綠色大便",
        "star":"★",
        "img":[poopgreen],
    },
    {
        "title":"一坨綠色大便",
        "star":"★",
        "img":[poopgreen],
    },
    {
        "title":"一坨綠色大便",
        "star":"★",
        "img":[poopgreen],
    },
    {
        "title":"一坨綠色大便",
        "star":"★",
        "img":[poopgreen],
    },
    {
        "title":"一坨綠色大便",
        "star":"★",
        "img":[poopgreen],
    },
    {
        "title":"一坨綠色大便",
        "star":"★",
        "img":[poopgreen],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨粉色大便",
        "star":"★",
        "img":[pooppink],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"一坨大便",
        "star":"★",
        "img":[poop],
    },
    {
        "title":"兩坨大便",
        "star":"★",
        "img":[poop,poop],
    },
    {
        "title":"兩坨大便",
        "star":"★",
        "img":[poop,poop],
    },
    {
        "title":"兩坨大便",
        "star":"★",
        "img":[poop,poop],
    },
    {
        "title":"兩坨大便",
        "star":"★",
        "img":[poop,poop],
    },
    {
        "title":"兩坨大便",
        "star":"★",
        "img":[poop,poop],
    },
    {
        "title":"三坨大便",
        "star":"★",
        "img":[poop,poop,poop],
    },
    {
        "title":"三坨大便",
        "star":"★",
        "img":[poop,poop,poop],
    },
    {
        "title":"三坨大便",
        "star":"★",
        "img":[poop,poop,poop],
    },
    {
        "title":"三坨大便",
        "star":"★",
        "img":[poop,poop,poop],
    },
    {
        "title":"三坨大便",
        "star":"★",
        "img":[poop,poop,poop],
    },
    {
        "title":"黃金大便",
        "star":"★★★★★",
        "img":[goldpoop],
    },
    {
        "title":"三坨大便",
        "star":"★",
        "img":[poop,poop,poop],
    },
    {
        "title":"四坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop],
    },
    {
        "title":"四坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop],
    },
    {
        "title":"四坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop],
    },
    {
        "title":"四坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop],
    },
    {
        "title":"四坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop],
    },
    {
        "title":"五坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop,poop],
    },
    {
        "title":"五坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop,poop],
    },
    {
        "title":"五坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop,poop],
    },
    {
        "title":"五坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop,poop],
    },
    {
        "title":"五坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop,poop],
    },
    {
        "title":"五坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop,poop],
    },
    {
        "title":"六坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop,poop,poop],
    },
    {
        "title":"六坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop,poop,poop],
    },
    {
        "title":"六坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop,poop,poop],
    },
    {
        "title":"六坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop,poop,poop],
    },
    {
        "title":"六坨大便",
        "star":"★",
        "img":[poop,poop,poop,poop,poop,poop],
    },
    {
        "title":"七坨大便",
        "star":"★★★★★",
        "img":[poop,poop,poop,poop,poop,poop,poop],
    },
    {
        "title":"一張星巴克禮券",
        "star":"★★★",
        "img":[starbucks],
    },
    {
        "title":"50元零用金",
        "star":"★★",
        "img":[dollar],
    },
    {
        "title":"50元零用金",
        "star":"★★",
        "img":[dollar],
    },
    {
        "title":"50元零用金",
        "star":"★★",
        "img":[dollar],
    },
    {
        "title":"50元零用金",
        "star":"★★",
        "img":[dollar],
    },
    {
        "title":"50元零用金",
        "star":"★★",
        "img":[dollar],
    },
    {
        "title":"50元零用金",
        "star":"★★",
        "img":[dollar],
    },
    {
        "title":"爆氣模式",
        "star":"★★",
        "img":[angry],
    },
    {
        "title":"爆氣模式",
        "star":"★★",
        "img":[angry],
    },
    {
        "title":"爆氣模式",
        "star":"★★",
        "img":[angry],
    },
    {
        "title":"攻擊力下降",
        "star":"★",
        "img":[sword],
    },
    {
        "title":"攻擊力下降",
        "star":"★",
        "img":[sword],
    },
    {
        "title":"攻擊力下降",
        "star":"★",
        "img":[sword],
    },
    {
        "title":"攻擊力上升",
        "star":"★★",
        "img":[swordbuff],
    },
    {
        "title":"攻擊力上升",
        "star":"★★",
        "img":[swordbuff],
    },
    {
        "title":"攻擊力上升",
        "star":"★★",
        "img":[swordbuff],
    },
    {
        "title":"100元零用金",
        "star":"★★★",
        "img":[profit],
    },
    {
        "title":"100元零用金",
        "star":"★★★",
        "img":[profit],
    },
    {
        "title":"100元零用金",
        "star":"★★★",
        "img":[profit],
    },
    {
        "title":"100元零用金",
        "star":"★★★",
        "img":[profit],
    },
    {
        "title":"100元零用金",
        "star":"★★★",
        "img":[profit],
    },
    {
        "title":"500元零用金",
        "star":"★★★★",
        "img":[profit500],
    },
    {
        "title":"500元零用金",
        "star":"★★★★",
        "img":[profit500],
    },
    {
        "title":"1000元零用金",
        "star":"★★★★★",
        "img":[profit1000],
    },
    {
        "title":"給你寶寶100元零用錢:(",
        "star":"★★",
        "img":[givemoney],
    },
    {
        "title":"給你寶寶100元零用錢:(",
        "star":"★★",
        "img":[givemoney],
    },
    {
        "title":"給你寶寶100元零用錢:(",
        "star":"★★",
        "img":[givemoney],
    },
    {
        "title":"給你寶寶100元零用錢:(",
        "star":"★★",
        "img":[givemoney],
    },
    {
        "title":"給你寶寶500元零用錢:(",
        "star":"★★",
        "img":[givemoney],
    },
    {
        "title":"給你寶寶500元零用錢:(",
        "star":"★★",
        "img":[givemoney],
    },
    {
        "title":"給你寶寶1000元零用錢:(",
        "star":"★★",
        "img":[givemoney],
    },
    {
        "title":"今天不能對寶寶生氣",
        "star":"★★★★",
        "img":[noangry],
    },
    {
        "title":"今天不能對寶寶生氣",
        "star":"★★★★",
        "img":[noangry],
    },
    {
        "title":"今天不能對寶寶生氣",
        "star":"★★★★",
        "img":[noangry],
    },
    {
        "title":"謝judy今天要發限時",
        "star":"★★★★",
        "img":[ig],
    },
    {
        "title":"謝judy今天要發限時",
        "star":"★★★★",
        "img":[ig],
    },
    {
        "title":"謝judy今天要發限時",
        "star":"★★★★",
        "img":[ig],
    },
    {
        "title":"我要去找寶寶玩<33",
        "star":"★★★★★",
        "img":[ticket],
    },
    {
        "title":"我要去找寶寶玩<33",
        "star":"★★★★★",
        "img":[ticket],
    },
    {
        "title":"寶寶要下來找我玩<33",
        "star":"★★★★★",
        "img":[ticket],
    },
    {
        "title":"寶寶要下來找我玩<33",
        "star":"★★★★★",
        "img":[ticket],
    },
    {
        "title":"獲得ubereat200元美食券",
        "star":"★★★★",
        "img":[uberfood],
    },
    {
        "title":"獲得ubereat200元美食券",
        "star":"★★★★",
        "img":[uberfood],
    },
    {
        "title":"2000元衣服購物金",
        "star":"★★★★★",
        "img":[shopping],
    },
    {
        "title":"狗骨頭",
        "star":"★★★",
        "img":[dogbone],
    },
    {
        "title":"狗骨頭",
        "star":"★★★",
        "img":[dogbone],
    },
    {
        "title":"狗骨頭",
        "star":"★★★",
        "img":[dogbone],
    },
    {
        "title":"狗骨頭",
        "star":"★★★",
        "img":[dogbone],
    },
    {
        "title":"狗骨頭",
        "star":"★★★",
        "img":[dogbone],
    },
    {
        "title":"狗狗的祝福",
        "star":"★★★",
        "img":[dogbless],
    },
    {
        "title":"狗狗的祝福",
        "star":"★★★",
        "img":[dogbless],
    },
    {
        "title":"狗狗的祝福",
        "star":"★★★",
        "img":[dogbless],
    },
    {
        "title":"狗狗的祝福",
        "star":"★★★",
        "img":[dogbless],
    },
    {
        "title":"狗狗的祝福",
        "star":"★★★",
        "img":[dogbless],
    },
    {
        "title":"狗狗的祝福",
        "star":"★★★",
        "img":[dogbless],
    },
    {
        "title":"狗狗的祝福",
        "star":"★★★",
        "img":[dogbless],
    },
    {
        "title":"狗狗的祝福",
        "star":"★★★",
        "img":[dogbless],
    },
    {
        "title":"狗狗的祝福",
        "star":"★★★",
        "img":[dogbless],
    },
    {
        "title":"狗狗飼料",
        "star":"★★★",
        "img":[dogfood],
    },
    {
        "title":"狗狗飼料",
        "star":"★★★",
        "img":[dogfood],
    },
    {
        "title":"狗狗飼料",
        "star":"★★★",
        "img":[dogfood],
    },
    {
        "title":"狗狗飼料",
        "star":"★★★",
        "img":[dogfood],
    },
    {
        "title":"狗狗飼料",
        "star":"★★★",
        "img":[dogfood],
    },
    {
        "title":"狗狗飼料",
        "star":"★★★",
        "img":[dogfood],
    },


];
const cardNum = cardContent.length;
function getRandomInt(e) {
    return Math.floor(Math.random() * e);
}
function CardHide(){
        document.getElementById('card-back').style.setProperty('display','none','important');
    } 
    function CardShow(){
        document.getElementById('card-front').style.setProperty('display','block','important');
        document.getElementById('card-front').style.setProperty('opacity','1','important');
    }
function CardGifts(){
    const cardBack = document.getElementsByClassName('card-back');
    const cardFront = document.getElementsByClassName('card-front');

    function CardHide(){
        document.getElementById('card-back').style.setProperty('display','none','important');
    } 
    function CardShow(){
        document.getElementById('card-front').style.setProperty('display','block','important');
        document.getElementById('card-front').style.setProperty('opacity','1','important');
    } 
    document.getElementById('card-back').style.setProperty('transform','rotateY(180deg)','important');
    document.getElementById('card-front').style.setProperty('transform','rotateY(0deg)','important');
    setTimeout(CardHide,600);
    setTimeout(CardShow,600);

    var thisRandomGift = getRandomInt(cardNum);
    localStorage.setItem('CardGot',1)
    localStorage.setItem('CardGotTime',nowDate.getDate())
    // localStorage.setItem('Gift-title',cardContent[thisRandomGift].title);
    // localStorage.setItem('Gift-star',cardContent[thisRandomGift].star);
    // localStorage.setItem('gift',thisRandomGift);
    
    
}
var nowDate = new Date();//現在時刻
var nextDate = new Date();//用戶登錄時刻的下一個整點，也可以設置成某一個固定時刻
nextDate.setDate(nextDate.getDate()+1);
nextDate.setHours(0);//小時數增加1
nextDate.setMinutes(0);
nextDate.setSeconds(0);

window.addEventListener("load",function(e){
    var thisRandomGift = getRandomInt(cardNum);
    const elementBack = document.getElementById("card-back");
    localStorage.setItem('nextDay',nextDate.getDate())
    if(this.localStorage.CardGot != 1){
        console.log('13')
        localStorage.setItem('Gift-title',cardContent[thisRandomGift].title);
        localStorage.setItem('Gift-star',cardContent[thisRandomGift].star);
        localStorage.setItem('gift',thisRandomGift);    
    }
    else if(nextDate.getDate() - localStorage.CardGotTime > 1){
        console.log('14')
        localStorage.setItem('Gift-title',cardContent[thisRandomGift].title);
        localStorage.setItem('Gift-star',cardContent[thisRandomGift].star);
        localStorage.setItem('gift',thisRandomGift);    
    }
    else{
        console.log('15');
        localStorage.getItem('Gift-title');
        localStorage.getItem('Gift-star');
        document.getElementById('card-back').style.setProperty('display','none','important');
    }

},false)
const CuteCard = ({setshowCard}) => {
    const [gotCard,setgotCard] = useState(false);

    return (
        <Card className="d-flex justify-content-center align-items-center px-3">
            <section className="w-100 h-100 position-absolute" style={{background:"rgb(0,0,0,0.5)"}} onClick={()=>setshowCard(false)}></section>
            <h3 className="text-white position-absolute text-center py-2 mb-0 w-100" style={{zIndex:"9999",top:"10%",background:"rgb(0,0,0,.5)"}}>{localStorage.CardGot == 1 && localStorage.nextDay - localStorage.CardGotTime  <= 1 ? "今天抽過了！！" : "抽抽今日卡片"}</h3>
            <div  className="col-12 bg-light position-absolute shadow-lg p-4 card-back card" onClick={CardGifts} style={{height:"500px",zIndex:"1000",display:localStorage.CardGot == 1 && localStorage.nextDay - localStorage.CardGotTime  <= 1 ? "none" : "block"}} id="card-back">
                <div className="border w-100 h-100">

                </div>
            </div>
            <div id="card-front" className="col-12 bg-light position-absolute shadow-lg p-4 card-front card" style={{height:"500px",zIndex:"999",display:localStorage.CardGot == 1 && localStorage.nextDay - localStorage.CardGotTime  <= 1 ? "block" : "",opacity:localStorage.CardGot == 1 && localStorage.nextDay - localStorage.CardGotTime  <= 1 ? "1":"0",transform:localStorage.CardGot == 1 && localStorage.nextDay - localStorage.CardGotTime  <= 1 ? "rotateY(0deg)":""}}>
                <div className="card-front-bg"></div>
                <div className="border w-100 h-100 p-3 d-flex flex-column align-items-center">
                    <h5>今日抽獎結果</h5>
                    <div className="w-100 mb-2" style={{borderBottom:"2px solid rgb(50 50 50)"}}></div>
                    
                    <p>恭喜寶貝獲得</p>

                    <h3>{localStorage.getItem('Gift-title')}</h3>
                    <p className="text-gold h1">{localStorage.getItem('Gift-star')}</p>
                    <div className="d-flex row justify-content-center align-items-center" id="addimg">
                        {
                            cardContent[localStorage.getItem('gift')].img.map(function(item){
                                return(
                                    <img className="my-1 px-0" src={item} style={{width:"64px",height:"64px"}} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </Card>
    )
}

export default CuteCard;