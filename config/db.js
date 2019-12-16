const mongoose = require('mongoose');
// process.env.MONGO_URI
const uri = "mongodb://localhost:27017/SOUMAN"
const connectDB = async () => {
  const conn = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected: ${conn.Connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;