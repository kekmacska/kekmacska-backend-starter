require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const routes=require('./routes');

mongoose.set('strictQuery',true);
mongoose.connect(process.env.DATABASE_URL);

mongoose.connection.on('error',(e)=>{console.log(e);});
mongoose.connection.once('connected',()=>console.log("Database url",process.env.DATABASE_URL));

const app=express();
app.use(express.json());
app.use(cors());
app.use('/api',routes);
app.listen(3e3,()=>console.log(`\nServer Started at \nhttp://localhost:3000\n`))