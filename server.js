const app = require('./app');
const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./src/config/database');

dotenv.config();

connectDatabase();
app.listen(process.env.PORT, ()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
})