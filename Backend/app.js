require("dotenv").config();
const express = require("express")
const cors = require("cors")
const { default: mongoose } = require("mongoose");
const { postContactMeRouter, getViewRouter } = require("./Router/UserRouter");

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const DBUrl = process.env.DBUrl;
app.use(cors({
  origin: ["http://localhost:5173", "http://192.168.0.109:5173", "https://harshportfolio-e2u3.onrender.com"],
  credentials: true
}))

app.use('/contact', postContactMeRouter)
app.use('/views', getViewRouter)
PORT = 3000;
mongoose.connect(DBUrl).then(() => {
  console.log("Mongoose Connect");
  app.listen(3000, () => {
    console.log(`http://localhost:${PORT}`)
  })
})