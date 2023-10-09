import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import router from "./Routes/user-routes.js";
import config from "./config.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/ecommerce/user", router);


const mongoURI = "mongodb+srv://harshalhonde17:harshal%40123@cluster0.b0mwyen.mongodb.net/Blogs?retryWrites=true&w=majority";


mongoose
  .connect(mongoURI)
  .then(() => app.listen(5500))
  .then(() => console.log("connected to db at port 5500 :)"))
  .catch((err) => console.log(`${err} is error`));
