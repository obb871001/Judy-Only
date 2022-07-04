import React,{useState,useRef} from "react";
import styled from "@emotion/styled";
import { availableLocations } from './../utils/helpers';
import { hasChanged } from "@vue/shared";



const WeatherSettingWrapper = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.foregroundColor};
  box-sizing: border-box;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.titleColor};
  margin-bottom: 30px;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 15px;
`;

const StyledSelect = styled.select`
  display: block;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.textColor};
  outline: none;
  width: 100%;
  max-width: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  padding: 7px 10px;
  margin-bottom: 40px;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-shadow: none;
  outline: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    margin: 0;
    letter-spacing: 0.3px;
    line-height: 1;
    cursor: pointer;
    overflow: visible;
    text-transform: none;
    border: 1px solid transparent;
    background-color: transparent;
    height: 35px;
    width: 80px;
    border-radius: 5px;
    font-size: 14px;

    &:focus,
    &.focus {
      outline: 0;
      box-shadow: none;
    }

    &::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }
  }
`;

const Back = styled.button`
  && {
    color: ${({ theme }) => theme.textColor};
    border-color: ${({ theme }) => theme.textColor};
  }
`;

const Save = styled.button`
  && {
    color: white;
    background-color: #40a9f3;
  }
`;

const WeatherSetting = ({handleSettings,handleNowCityChange,cityName}) =>{

    const inputLocationRef = useRef(null);

    const [locationName,setlocationName] = useState(cityName);

    const handleChange =(e)=>{
        setlocationName(e.target.value);
    }

const handleSave = () =>{
    console.log(locationName)
    handleNowCityChange(locationName);
    handleSettings('WeatherCard');
}

    return (
        <WeatherSettingWrapper>
        <Title>設定</Title>
        <StyledLabel htmlFor="location">地區</StyledLabel>
  
        <StyledSelect id="location" name="location"  onChange={handleChange} ref={inputLocationRef} defaultValue="新竹縣">
            {availableLocations.map(({cityName})=>(
                <option value={cityName} key={cityName}>
                    {cityName}
                </option>
            ))}
        </StyledSelect>
  
        <ButtonGroup>
          <Back onClick={()=> handleSettings('WeatherCard')}>返回</Back>
          <Save onClick={handleSave}>儲存</Save>
        </ButtonGroup>
      </WeatherSettingWrapper>
    )
}

export default WeatherSetting