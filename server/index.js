import cors from "cors";
import express from "express";
import 'dotenv/config';
import CONNECT_DATABASE from "./ConnectDatabase.js";

// const SIGNUP_ROUTE=require("./routes/Auth/signup");

const app=express();    
CONNECT_DATABASE();
app.use(cors());
// app.use(express.json({ limit: '15mb' }));
// app.use('/api/signup', SIGNUP_ROUTE); 

app.get("/", (req, res) => {
    const countryNames = ["United States", "Canada", "United Kingdom"];
    console.log("Hello")
    res.json({ countries: countryNames });
});

app.listen(5000,()=>{
    console.log("Server Started on Port 5000");
});