import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="dcf589e2793b0722852280598ab69ec5";

    
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);


    let getWeatherInfo=async ()=>{
        try{
            let resonce= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce=await resonce.json();
            // console.log(jsonResponce);
            let result={
                city: city,
                temp:jsonResponce.main.temp,
                tempMin:jsonResponce.main.temp_min,
                tempMax:jsonResponce.main.temp_max,
                humidity:jsonResponce.main.humidity,
                feelsLike:jsonResponce.main.feels_like,
                weather:jsonResponce.weather[0].description,
    
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        }
        
     }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
           let newInfo= await getWeatherInfo();
           updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        
       
    }

   

    return(
        <div className='SearchBox'>
           
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/><br /><br />
            <Button variant="contained" type='submit' className='SearchBtn'>Search</Button>
            {error && <p style={{color:"red"}}>no such place exit</p>}
            </form>

        </div>
    );
}