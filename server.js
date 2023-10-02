const express = require('express');// to build a server
const dotenv = require('dotenv');// allows us to create global variables.
const colors = require('colors');// colors in our console
const morgan = require('morgan');
const app = express();
const transcations = require('./routes/transaction')
const connectDB = require('./config/db')
app.use(express.json());

connectDB();

dotenv.config({path:'./config/config.env'})//The dotenv.config() function is used in Node.js applications to load environment variables from a .env file into the Node.js process's process.env object.

app.use('/api/v1/transactions',transcations)
const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV==='development')
{
app.use(morgan('dev'));
}


app.listen(PORT ,()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode on  port ${PORT}`.yellow.bold);
})
// console.log(process.env.MONGO_URI)


