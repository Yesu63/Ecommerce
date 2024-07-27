const mongoose = require("mongoose");

const databaseConnection = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then((con)=>{
        console.log(`Database Connected in the host : ${con.connection.host}`)})
        .catch("Database not connected");
}


module.exports = databaseConnection;