import React from "react";
import Navbar from "./components/Navbar";
import DatePage from "./DatePage";

export default function(){
  return(
    <div className="bg-black h-screen ">
        <Navbar></Navbar>
        <DatePage></DatePage>
    </div>
  )
  
}