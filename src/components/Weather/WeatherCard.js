import React, { useEffect, useState } from 'react'

const WeatherCard = ({tempInfo}) => {
    const [weatherState,setWeatherState]=useState("")
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    }=tempInfo;

    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                    setWeatherState("ri-cloud-line")
                    break;
                case "Haze":
                    setWeatherState("ri-haze-line")
                    break;
                case "Clear":
                    setWeatherState("ri-sun-line")
                    break;
                default :
                    setWeatherState("ri-sun-line")
                    break;
            }
        }
    },[weathermood])

    // converting seconds into time
    let sec=sunset;
    let date = new Date(sec*1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}`

  return (
    <>
        <article className="widget">
                <div className="weatherIcon">
                    <i className={`${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name},{country}</div>
                    </div>
                    <div className="date">{new Date().toLocaleDateString()}<br/>{new Date().toLocaleTimeString()}</div>
                </div>
                <div className="extra-temp">
                    <div className="two-sided-section">
                        <div className="logo"><i class="ri-sun-cloudy-line"></i></div>
                        <div className="desc">
                            <p className="extra-info-leftside">{timeStr}<br/>Sunset</p>
                        </div>
                    </div>
                    <div className="two-sided-section">
                        <div className="logo"><i class="ri-drop-line"></i></div>
                        <div className="desc">
                            <p className="extra-info-leftside">{humidity}<br/>Humidity</p>
                        </div>
                    </div>
                    <div className="two-sided-section">
                        <div className="logo"><i class="ri-heavy-showers-line"></i></div>
                        <div className="desc">
                            <p className="extra-info-leftside">{pressure}<br/>Pressure</p>
                        </div>
                    </div>
                    <div className="two-sided-section">
                        <div className="logo"><i class="ri-windy-line"></i></div>
                        <div className="desc">
                            <p className="extra-info-leftside">{speed}<br/>Speed</p>
                        </div>
                    </div>
                </div>
            </article>
    </>
  )
}

export default WeatherCard