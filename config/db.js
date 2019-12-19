const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env'})
// const uri = "mongodb://localhost:27017/SOUMAN"
const connectDB = async () => {
  const conn = await mongoose.connect("mongodb://localhost:27017/Bootcamps", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;