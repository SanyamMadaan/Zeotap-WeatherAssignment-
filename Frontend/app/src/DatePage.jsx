import { useState,useEffect } from "react";

export default function() {
    const [city, setCity] = useState("Delhi");
    const [currentTime, setCurrentTime] = useState({
        hour: 0,
        minute: 0,
        day: 0,
        month:"",
    });

    function calculateTime() {
        const d = new Date();
        const month=monthNames[d.getMonth()];
        const hour = d.getHours();
        const minute = d.getMinutes();
        const day = d.getDate(); // Get the current day of the month

        setCurrentTime({ hour, minute, day,month });
    }

    const monthNames=[
        "January", "February", "March", "April", 
        "May", "June", "July", "August", 
        "September", "October", "November", "December"
    ]

    useEffect(() => {
        calculateTime(); // Set initial time

        const intervalId = setInterval(() => {
            calculateTime(); // Update time every 1 minute (60000 ms)
        }, 60000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="md:w-1/3 sm:flex justify-center date-compo m-5 rounded-lg">
            <div className="">
                <div className="text-center font-bold text-4xl pt-8">
                    {city}
                </div>
                <div className="mt-8 text-center text-4xl font-bold">
                    <div>
                        {currentTime.hour>=13?currentTime.hour-12:currentTime.hour}:{currentTime.minute < 10 
                            ? `0${currentTime.minute}` 
                            : currentTime.minute}
                    </div>
                    <div className="mt-4">{currentTime.day} {currentTime.month}</div>
                </div>
            </div>
        </div>
    );
}