
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css"
import { getOpacity } from "@mui/material/styles/createColorScheme";


export default function WeatherApp(){

    const[weatherInfo,setWeatherInfo]=useState(
       { city:"Botad",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",}
    )
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);

    }
    return (
        <div style={{textAlign:"center"}}>
<marquee style={{ fontSize: "30px", fontWeight: "bold", color: "#ffffff", backgroundColor: "#333333", padding: "10px" ,  }}>
    Weather App By Dipak
</marquee>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}