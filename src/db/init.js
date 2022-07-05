const mongoose = require("mongoose");
require("dotenv").config();

const connect = async function(){
    const conn = await mongoose.connect(process.env.MONGO);    
};

module.exports = connect;