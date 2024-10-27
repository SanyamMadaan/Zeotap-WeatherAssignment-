import { useState } from "react"

export default function(){
    const [city,setCity]=useState("Delhi");

    //yha par city wali api call ho gi
    function UpdateInfo(){

    }

    return(
        <div className="flex justify-between p-2 pt-4 mb-10">
            <div>
                
            </div>
            <div className="border-2 border-black rounded-lg flex">
                <input id="searchbar" className="px-16 h-full w-full" type="text"  placeholder="Search for your preffered city..." onChange={(e)=>setCity(e.target.value)} />
                <button className="bg-white text-black p-2 font-bold" onClick={()=>{
                    UpdateInfo();
                }}>Search</button>
            </div>
            <div>
                <button className="bg-green-600 text-white p-2 rounded-lg hover:cursor:pointer">
                    Current Location
                </button>
            </div>
        </div>
    )
}