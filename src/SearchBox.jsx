import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("")
    let [error,setError] = useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "13bab893c00b23970b792ff36ac100dd";

    let getWeatherInfo = async ()=> {
        // eslint-disable-next-line no-useless-catch
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jasonResponse = await response.json(); 
        let result ={
            city: city,
            temp: jasonResponse.main.temp,
            temp_max: jasonResponse.main.temp_max,
            temp_min: jasonResponse.main.temp_min,
            humidity: jasonResponse.main.humidity,
            feels_like: jasonResponse.main.feels_like,
            weather: jasonResponse.weather[0].description
        };
        console.log(result)
        return result;
        } catch (err){
            throw err;
        };
    }

    let handelCity = (evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit = async (event)=>{
        try{
        event.preventDefault();
        console.log(city)
        setCity("")
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        // eslint-disable-next-line no-unused-vars
        } catch (err){
            setError(true)
        }
    }
    return (
        <div className="weatherbox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City name" variant="outlined" value={city} onChange={handelCity} required/>
            <br />
            <br />
            <Button variant="contained" type="submit" id="searchbox">Search</Button>
            </form>
            {error && <p style={{ color:"red"}}>No such place exists!</p>}
        </div>
    )
}