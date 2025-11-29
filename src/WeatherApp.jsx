import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import './WeatherApp.css'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
    city: "Surat",
    temp: 23,
    temp_min: 20,
    temp_max: 24,
    humidity: 65,
    feels_like: 25,
    weather: "haze",
  });

  let updateInfo = (result)=>{
    setWeatherInfo(result)
  }
    return (
        <div className="container">
            <h1>This is My Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}