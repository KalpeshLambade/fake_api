// import express from "express";
// import morgan from "morgan";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import router from "./routes/userRoutes.js";

// const app = express();
// dotenv.config();

// app.use(express.json());
// app.use(morgan("dev"));
// app.use("/api/fakestore", router);

// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => console.log("Mongo DB connetion established"))
//   .catch((error) => console.log(`Databse error ${error}`));

// app.listen(process.env.PORT, () => {
//   console.log(`server running at port ${process.env.PORT}`);
// });


import express from 'express'
import mongoose from 'mongoose'
import dotenv from  'dotenv'
import morgan from 'morgan'
import router from './routes/userRoutes.js'

//instance creation
const app = express()
//env configuration
dotenv.config()
//middleweares
app.use(express.json())
app.use(morgan('dev'))
//app route
app.use("/api/fakestore", router);
//get
app.get('/ping',(req,res)=>{
  res.send("pong")
})

//databse config
mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("Databse Established"))
.catch((error)=> console.log(`Database Error : ${error}`))

app.listen(process.env.PORT, ()=>{
  console.log(`server is running at Port ${process.env.PORT}`)
})

