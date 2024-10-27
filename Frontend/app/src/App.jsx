import React from "react";
import Navbar from "./components/Navbar";
import DatePage from "./DatePage";
import WeatherComponent from "./components/WeatherComponent";

export default function(){
  return(
    <div className="bg-black md:h-screen ">
        <Navbar></Navbar>
        <div className="sm:flex">
        <DatePage></DatePage>
        <WeatherComponent></WeatherComponent>
        </div>
        
    </div>
  )
  
}