const express=require('express');
require('dotenv').config();
const PORT=process.env.PORT;
const weatherRoutes=require('./routes/weather');
const cors=require('cors');
require('./db');

const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/weather',weatherRoutes);

app.listen(PORT,()=>{
    console.log(`App is running at http://localhost:${PORT}`);
})