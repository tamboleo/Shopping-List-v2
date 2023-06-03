const mongoose = require('mongoose')

const connectDB = async () => {
  const conn =  await mongoose.connect(process.env.DATABASE_URI);
    console.log(`Connected to ${conn.connection.host}`)
}

module.exports = connectDB;