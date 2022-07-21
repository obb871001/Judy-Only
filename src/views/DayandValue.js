import React,{useEffect} from "react";
import styled from "@emotion/styled";
import Love from "./../images/smile.png"
import AngryBird from "./../images/angry-birds.png"

var brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("board"));
const duration = 3000;
const speed = 0.5;
const cursorXOffset = 0;
const cursorYOffset = -5;
var hearts = [];
function generateHeart(x, y, xBound, xStart, scale)
{
   var heart = document.createElement("DIV");
   heart.setAttribute('class', 'heart');
   brd.appendChild(heart);
   heart.time = duration;
   heart.x = x;
   heart.y = y;
   heart.bound = xBound;
   heart.direction = xStart;
   heart.style.left = heart.x + "px";
   heart.style.top = heart.y + "px";
   heart.scale = scale;
   heart.style.transform = "scale(" + scale + "," + scale + ")";
   if(hearts == null)
    hearts = [];
   hearts.push(heart);
   return heart;
}
var before = Date.now();
var id = setInterval(frame, 5);
var i ='';
function frame()
{
   var current = Date.now();
   var deltaTime = current - before;
   before = current;
   for(i in hearts)
   {
    var heart = hearts[i];
    heart.time -= deltaTime;
    if(heart.time > 0)
    {
     heart.y -= speed;
     heart.style.top = heart.y + "px";
     heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) + "px";
    }
    else
    {
     heart.parentNode.removeChild(heart);
     hearts.splice(i, 1);
    }
   }
}
const clickLove = () => {
    var randomClickX = Math.floor(Math.random()*(120-1+1))+1;
    var randomClickY = Math.floor(Math.random()*(350-250+1))+250;
    var randomScale  = Math.random()*(0.5-0.3+1)+0.3;
    generateHeart(randomClickX, randomClickY, null, null, randomScale);
}
const LuckyCol = styled.div`
  :active{
    transform:translateY(5px);
  }
  transition:.3s all ;
  border-radius:25px;
  border: 1px solid #b1c4cb;
  background:#cfe3ff;
  width:54.333333% !important;
  img{
    width:18px;
  }
`

const OurdayNumber = styled.div`
:active{
    transform:translateY(5px);
  }
  transition:.3s all ;
  color: #535353;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight:300;
  border-radius:25px;
  border: 1px solid #b1c4cb;
  background:#DBF2FB;
  img{
    width:50px;
  }
`
const today = new Date();
const togetherday = new Date("2019/11/11");
const together = Math.abs(today-togetherday);
var days = Math.floor(together/(1000 * 3600 * 24));
var date = new Date();//現在時刻
var dateIntegralPoint = new Date();//用戶登錄時刻的下一個整點，也可以設置成某一個固定時刻
dateIntegralPoint.setDate(dateIntegralPoint.getDate()+1);
dateIntegralPoint.setHours(0);//小時數增加1
dateIntegralPoint.setMinutes(0);
dateIntegralPoint.setSeconds(0);






const randomLucky = Math.floor(Math.random()*(6-2+1))+2;
const randomAngry = Math.floor(Math.random()*(6-2+1))+2;
const randomExplode = Math.floor(Math.random()*(6-2+1))+2;
var clover = 'data:image/png;base64,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'
var angryBird = 'data:image/png;base64,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'
var explode ='data:image/png;base64,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'
var luckyValue = '';
var angryValue = '';
var explodeValue = '';
for(let i = 1 ; i < randomLucky ; i++){
luckyValue += "<img src="+clover+" />";
}
for(let i = 1 ; i < randomAngry ; i++){
angryValue += "<img src="+angryBird+" />"
}
for(let i = 1 ; i < randomExplode ; i++){
explodeValue += "<img src="+explode+" />"
}    
const Lucky = document.getElementById('Lucky');
const Angry = document.getElementById('Angry');
const Explode = document.getElementById('Explode');
function getTodayValue(){

        localStorage.setItem('TodayGot',1);
        localStorage.setItem('LuckyValue',luckyValue);
        localStorage.setItem('AngryValue',angryValue);
        localStorage.setItem('ExplodeValue',explodeValue);
        localStorage.setItem('clickTime',date.getDate());
        document.getElementById('Lucky').innerHTML = luckyValue;
        document.getElementById('Angry').innerHTML = angryValue;
        document.getElementById('Explode').innerHTML = explodeValue;
        document.getElementById('LuckyButton').style.setProperty('display','none','important');
        
}
window.addEventListener("load",function(e){
  localStorage.setItem('tomorrowTime',dateIntegralPoint.getDate());
  var clickT = localStorage.clickTime;
  var tomorrowT = localStorage.tomorrowTime;

  if(localStorage.TodayGot != 1){
    document.getElementById('LuckyButton').style.setProperty('display','flex','important');
  }
  else if(tomorrowT - clickT > 1){
      document.getElementById('LuckyButton').style.setProperty('display','flex','important');
  }
  else{
      localStorage.getItem('clickTime',date);
      document.getElementById('Lucky').innerHTML = localStorage.getItem('LuckyValue',luckyValue);
      document.getElementById('Angry').innerHTML = localStorage.getItem('AngryValue',angryValue);
      document.getElementById('Explode').innerHTML = localStorage.getItem('ExplodeValue',explodeValue);
      document.getElementById('LuckyButton').style.setProperty('display','none','important');
  }
},false)
function test(){
  localStorage.setItem('tomorrowTime',dateIntegralPoint.getDate());
  var clickT = localStorage.clickTime;
  var tomorrowT = localStorage.tomorrowTime;

  if(localStorage.TodayGot != 1){
    document.getElementById('LuckyButton').style.setProperty('display','flex','important');
  }
  else if(tomorrowT - clickT > 1){
      document.getElementById('LuckyButton').style.setProperty('display','flex','important');
  }
  else{
      localStorage.getItem('clickTime',date);
      document.getElementById('Lucky').innerHTML = localStorage.getItem('LuckyValue',luckyValue);
      document.getElementById('Angry').innerHTML = localStorage.getItem('AngryValue',angryValue);
      document.getElementById('Explode').innerHTML = localStorage.getItem('ExplodeValue',explodeValue);
      document.getElementById('LuckyButton').style.setProperty('display','none','important');
  }

}

const Photo = () =>{

  useEffect(()=>{
    test( )
  },[])
    return(
        <section className="px-3 mb-3">
            <div className="d-flex justify-content-between" style={{height:"120px"}}>
                <OurdayNumber className="col-5 h-100 p-3 shadow d-flex flex-column align-items-center justify-content-center" onClick={clickLove}>
                    <img src={require('./../images/relationship.png')}/>
                    {days}days
                </OurdayNumber>
                <LuckyCol className="col-6 shadow p-3 h-100 d-flex flex-column align-items-start justify-content-center position-relative">
                    <div className="w-100 h-100 position-absolute start-0 top-0 d-flex justify-content-center align-items-center text-white"
                         style={{borderRadius:"25px",background:"rgb(131 146 151)",borderStyle:"dashed"}}
                         id="LuckyButton"
                         onClick={getTodayValue}
                    >
                            抽抽今日寶寶值
                    </div>
                    <div className="d-flex align-items-center mb-1"><p className="mb-0 me-2" style={{fontWeight:"300",fontSize:"14px"}}>幸運指數:</p><div className="d-flex align-items-center" id="Lucky"></div></div>
                    <div className="d-flex align-items-center mb-1"><p className="mb-0 me-2" style={{fontWeight:"300",fontSize:"14px"}}>白目指數:</p><div className="d-flex align-items-center" id="Angry"></div></div>
                    <div className="d-flex align-items-center mb-1"><p className="mb-0 me-2" style={{fontWeight:"300",fontSize:"14px"}}>火爆指數:</p><div className="d-flex align-items-center" id="Explode"></div></div>
                </LuckyCol>
            </div>
        </section>
    );
}

export default Photo;