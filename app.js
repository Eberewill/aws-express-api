const express = require('express')
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const slot_route = require('./routes/sloteRoutes.js')
const doc_route = require('./routes/doctorsRoutes.js')

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/doctor", doc_route);
app.use("/api/slot", slot_route);


app.get("/", (req, res) => {
  res.send("API is running....");
});



module.exports = app