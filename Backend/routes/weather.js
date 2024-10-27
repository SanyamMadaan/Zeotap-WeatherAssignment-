const express=require('express');
const axios=require('axios');
const Weather=require('../models/weather');
const router=express.Router();

const API_KEY=process.env.OPENWEATHER_API_KEY;

router.get('/summaries', async (req, res) => {
  try {
    const summaries = await Weather.find({});
    res.status(200).json(summaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/search/:city', async (req, res) => {
  try {
      const city = req.params.city || "Delhi";
      console.log(city);
      
      const apiResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const response = apiResponse.data;

      const weatherConditions = await Weather.create({
          city: response.name,
          date: Date.now(),
          avgTemp: (response.main.temp - 273.15).toFixed(2),
          maxTemp: (response.main.temp_max - 273.15).toFixed(2),
          minTemp: (response.main.temp_min - 273.15).toFixed(2),
          dominantCondition: response.weather[0].main
      });

      console.log('Stored in database successfully');
      res.status(200).json({ weatherConditions });

  } catch (error) {
      console.error(error);
      return res.json({ msg: 'Error while searching city' });
  }
});


module.exports=router;