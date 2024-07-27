const express = require("express");
const product = require("../backend/routes/product");
const order = require('./routes/order')
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const databaseConnection = require("./config/databaseConnection");
dotenv.config({path : path.join(__dirname, 'config' , 'config.env')})
app.use(express.json())
app.use(cors())
app.use('/',product);
app.use('/',order);

databaseConnection();

app.listen(process.env.PORT, ()=>{
    console.log(`Server Listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})