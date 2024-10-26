const mongoose=require('mongoose');
require('dotenv').config();
const DATABASE_URL=process.env.DATABASE_URL;

try{
    mongoose.connect(DATABASE_URL).then(()=>{
        console.log('Database connected successfully');
    })
}catch(err){
    console.log('Error while connecting to database');
}
