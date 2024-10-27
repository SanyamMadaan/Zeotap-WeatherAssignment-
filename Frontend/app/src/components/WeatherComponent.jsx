import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [city,setCity]=useState("Delhi");
  const [weather, setWeather] = useState({
    temperature: 0,
    minTemp: 0,
    condition:"",
    maxTemp: 0
  });

  useEffect(() => {
    // Simulate fetching data from backend
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/weather/search/${city}`);
        const data = await response.data;
        console.log(data);
        setWeather({
          temperature: data.weatherConditions.avgTemp,
          condition: data.weatherConditions.dominantCondition,
          maxTemp:data.weatherConditions.maxTemp,
          minTemp:data.weatherConditions.minTemp,
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="w-full text-2xl justify-center weather-widget bg-gray-800 text-white p-4 m-2 rounded-lg shadow-lg flex flex-col items-center">
      <div className="text-5xl font-bold mb-2">
        {weather.temperature}°C
      </div>
      <div className="flex flex-row items-center justify-around w-full mt-4">
        <div className="flex flex-col items-center">
          <p>Condition</p>
          <p>{weather.condition}</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Minimum Temperature</p>
          <p>{weather.minTemp}°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Maximum Temperature</p>
          <p>{weather.maxTemp}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;
