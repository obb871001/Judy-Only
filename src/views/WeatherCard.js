import React from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { ReactComponent as RainIcon } from './../images/rain.svg';
import { ReactComponent as AirFlowIcon } from './../images/airFlow.svg';
import { ReactComponent as RefreshIcon } from './../images/refresh.svg';
import { ReactComponent as LoadingIcon } from './../images/loading.svg';
import WeatherIcon from './../components/WeatherIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTemperatureEmpty} from '@fortawesome/free-solid-svg-icons';
import {faClover} from '@fortawesome/free-solid-svg-icons';
import {faFaceAngry} from '@fortawesome/free-solid-svg-icons';
import {faFrown} from '@fortawesome/free-solid-svg-icons';
import {faMeh} from '@fortawesome/free-solid-svg-icons';
import {faGrin} from '@fortawesome/free-solid-svg-icons';
import {faLaughBeam} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as CogIcon } from "./../images/cog.svg";
import { doc } from "prettier";

const WeatherCardWrapper = styled.div`
  :active{
    transform:translateY(5px);
  }
  transition:.3s all ;
  border: 2px solid #5073ec;
  min-width: 100%;
  overflow: hidden;
  // box-shadow: ${({theme})=>theme.boxShadow};
  // background-color: ${({theme})=>theme.foregroundColor};
  // background-color: #d9d9d9;
  // background-image: linear-gradient(to right, #60a0ff, #9bb5ff, #c4cbfe, #e5e4fe, #ffffff);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='390' height='160' preserveAspectRatio='none' viewBox='0 0 390 160'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1024%26quot%3b)' fill='none'%3e%3crect width='390' height='160' x='0' y='0' fill='rgba(109%2c 136%2c 231%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c189.85C35.394%2c186.197%2c49.917%2c142.208%2c75.496%2c117.473C95.286%2c98.335%2c120.475%2c85.233%2c133.35%2c60.899C146.683%2c35.701%2c147.03%2c7.02%2c148.988%2c-21.421C151.45%2c-57.181%2c166.964%2c-97.476%2c146.269%2c-126.743C125.654%2c-155.898%2c83.581%2c-159.513%2c48.159%2c-164.016C16.635%2c-168.024%2c-14.52%2c-161.985%2c-44.33%2c-150.974C-72.556%2c-140.548%2c-96.13%2c-122.848%2c-118.319%2c-102.524C-143.104%2c-79.823%2c-177.693%2c-59.461%2c-180.785%2c-25.993C-183.883%2c7.543%2c-150.543%2c31.929%2c-133.419%2c60.93C-118.348%2c86.455%2c-107.537%2c113.565%2c-86.221%2c134.163C-61.108%2c158.429%2c-34.737%2c193.435%2c0%2c189.85' fill='%235e7ce5'%3e%3c/path%3e%3cpath d='M390 282.94C414.976 279.44100000000003 442.883 288.913 463.65999999999997 274.617 484.328 260.396 488.772 232.60500000000002 497.39300000000003 209.04500000000002 505.363 187.262 509.863 165.551 512.019 142.456 514.802 112.64 530.89 77.531 511.824 54.43899999999999 492.856 31.467000000000013 455.006 43.965999999999994 425.80899999999997 38.045 399.717 32.754000000000005 374.379 12.472000000000008 349.329 21.488 324.31600000000003 30.491000000000014 316.793 61.504999999999995 301.07 82.941 286.828 102.35900000000001 266.374 117.955 261.30600000000004 141.497 256.087 165.74 266.744 189.44 272.977 213.442 280.558 242.638 275.829 281.896 301.764 297.298 327.915 312.829 359.879 287.15999999999997 390 282.94' fill='%237c94e9'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1024'%3e%3crect width='390' height='160' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  position:relative;
  border-radius:25px;
`

const Comfortable = styled.div`
margin-bottom: 10px;
display:flex;
align-items:center;
color:#828282;

svg{
  width:25px;
  height:23px;
  margin-right:30px;
  color:#e14028;
}
`
const Location = styled.div` 
  color: #f1f1f1;
  font-size: 38px;
  font-weight: 300;`;

const Description = styled.div`
  font-size:14px;
  color:#f1f1f1;
`

const CurrentWeather = styled.div`
  margin-right:11px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  svg{
    max-height: 41px!important;
    position: absolute;
    right: -36px;
    top: 69px;
  }
`
const Temperature = styled.div`
  display:flex;
  font-size:85px;
  color:#f1f1f1;
  position:relative;
  img{
    position: absolute;
    top: -7px;
    left: 119px;
    width: 21px;
    z-index: 999;
  }
  
`

const Celsius = styled.div`
  font-size:30px;
`

const AirFlow = styled.div`
  color:${({theme})=>theme.textColor};
  margin-bottom:10px;
  display:flex;
  align-items:center;

  svg{
    width:25px;
    height:auto;
    margin-right:30px;
  }
`

const Rain = styled.div`
  color:${({theme})=>theme.textColor};
  margin-bottom:10px;
  display:flex;
  align-items:center;

  svg{
    width:25px;
    height:auto;
    margin-right:30px;
  }

`

const Refresh = styled.div`
  position: absolute;
  bottom: 4px;
  right: 10px;
  color:#f1f1f1;
  margin-bottom:10px;
  display:flex;
  align-items:center;
  justify-content: end;
  font-size:14px;
  svg{
    width:14px;
    height:auto;
    margin-left:10px;
    cursor:pointer;
    animation:rotate infinite 1.5s linear;
    animation-duration:${({isLoading})=>(isLoading?'1.5s':'0s')};
  }
  @keyframes rotate{
    from {
      transform:rotate(360deg);
    }
    to{
      transform:rotate(0deg);
    }
  };
`
const Cog = styled(CogIcon)`
  position:absolute;
  top:15px;
  right:15px;
  width:25px;
  height:25px;
  cursor:pointer;
`
const Lucky = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:10px;

  img{
    width: 25px;
  }

  svg{
    color:#39993A;
    font-size:22px;
    margin-right:5px;
    transform:rotate(45deg);
  }
`
const Today = styled.div`
    font-size:14px;
`
const LuckyTalk = styled.div`
`

const OurImg = styled.div`
    width: 159px;
    height: 157px;
    position: absolute;
    right: 14px;
    border-radius: 10px;
`
const AngryValue = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px;
  svg{
    font-size:25px;
    margin-right:30px;
  }
`

var date = new Date();//現在時刻
var dateIntegralPoint = new Date();//用戶登錄時刻的下一個整點，也可以設置成某一個固定時刻
dateIntegralPoint.setDate(date.getDay()+4);//小時數增加1
dateIntegralPoint.setHours(0);//小時數增加1
dateIntegralPoint.setMinutes(0);
dateIntegralPoint.setSeconds(0);
function ramdom(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

setTimeout("localStorage.setItem('value',0)",dateIntegralPoint-date);//用戶登錄後的下一個整點執行


const WeatherCard = ({moment,currentWeather,fetchData,handleSettings,cityName}) =>{
    const {
        observationTime,
        locationName,
        temperature,
        windSpeed,
        rainPossibility,
        isLoading,
        comfortable,
        description,
        weatherCode,
      } = currentWeather;
    
    return (
        <WeatherCardWrapper className="shadow d-flex justify-content-between p-3" onClick={fetchData}>
          {/* <div className="position-absolute w-100 h-100" style={{backgroundImage:`url(${Image})`}}>

          </div> */}
        {/* <Cog onClick={()=>handleSettings('WeatherSetting')}/> */}
          <div className="d-flex flex-column justify-content-between">
            <Today id="clock"><p className="mb-2">{new Date().getMonth()+1}月{new Date().getDate()}日{new Date().toLocaleTimeString()}</p></Today>
            <Location className="position-relative mb-2">{cityName}</Location>
            <Description className="">{description}</Description>
          </div>
          <div>
            <CurrentWeather>
              <Temperature>
                {Math.round(temperature)} <Celsius>°C<img src={require('./../images/graduation-hat.png')} /></Celsius>
              </Temperature>
              <WeatherIcon weatherCode={weatherCode} moment={moment} />
              {/* <OurImg className="shadow">
                <img className="w-100" style={{borderRadius:"10px"}} src={require('./../images/IMG_8054.JPG')}/>
              </OurImg> */}
            </CurrentWeather>
          </div>
        {/* <Comfortable><FontAwesomeIcon icon={faTemperatureEmpty} />{comfortable}</Comfortable>
        <AirFlow><AirFlowIcon/>{windSpeed} m/h</AirFlow> */}
        {/* <Rain><RainIcon />{rainPossibility} %</Rain>
        <AngryValue style={faceColor}>
          <FontAwesomeIcon icon={faceSelect}  /><p id="angry" className="mb-0">{localStorage.angryValue}</p>%  ({angryText = '' ? '重開app看驚喜' : angryText})
        </AngryValue>
        <Lucky><div id="test"></div><button id="testbtn" className="btn btn-success" onClick={test}>judy今日幸運值</button></Lucky>
        <LuckyTalk>
        </LuckyTalk> */}
        <Refresh  isLoading={isLoading}>最後觀測時間：{
            new Intl.DateTimeFormat('zh-TW',{
              hour:'numeric',
              minute:'numeric',
            }).format(dayjs(observationTime))
          }{''} 
            {/* {currentWeather.isLoading?<LoadingIcon /> : < RefreshIcon/>} */}
        </Refresh>
      </WeatherCardWrapper>
    )
}

export default WeatherCard