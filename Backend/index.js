const express=require('express');
require('dotenv').config();
const PORT=process.env.PORT;
const cors=require('cors');
require('./db');

const app=express();

app.use(cors());

app.listen(PORT,()=>{
    console.log(`App is running at http://localhost:${PORT}`);
})