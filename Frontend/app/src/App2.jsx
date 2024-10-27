import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('Delhi');
  const [alertTemp, setAlertTemp] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/weather/search/${city}`);
      setWeatherData(response.data.weatherConditions);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleAlertCheck = () => {
    if (weatherData && weatherData.avgTemp > alertTemp) {
      setAlertMessage(`Alert! Temperature in ${weatherData.city} is above ${alertTemp}°C`);
    } else {
      setAlertMessage('');
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold my-6">Weather Monitoring Dashboard</h1>

      {/* Search Section */}
      <div className="flex mb-4">
        <div class="searchbox">
            <input type="text" placeholder="enter city name" onChange={(e)=>setCity(e.target.value)} spellcheck="false" id="city"/>
         </div>
        <button
          onClick={fetchWeatherData}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      
      {/* Display Weather Data */}
      {weatherData && (
        <div className="bg-white p-6 rounded-md shadow-md text-center w-96">
          <h2 className="text-2xl font-semibold">{weatherData.city}</h2>
          <p>Avg Temp: {weatherData.avgTemp}°C</p>
          <p>Max Temp: {weatherData.maxTemp}°C</p>
          <p>Min Temp: {weatherData.minTemp}°C</p>
          <p>Condition: {weatherData.dominantCondition}</p>
        </div>
      )}


    </div>
  );
}

export default App;
