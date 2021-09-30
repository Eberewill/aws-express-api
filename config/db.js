const mongoose = require("mongoose");

let MONGO_URI = ``
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    //console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    //console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
