import cors from "cors";
import express from "express";
import 'dotenv/config';
import bodyParser from 'body-parser'
import CONNECT_DATABASE from "./ConnectDatabase.js";


import AUTH_ROUTE from "./routes/auth/auth.js";
import GENERALS_ROUTE from "./routes/generals/generals.js"
import CATALOGUE_ROUTE from "./routes/catalogue/catalogue.js";


// const SIGNUP_ROUTE=require("./routes/Auth/signup");

const app=express();   
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
CONNECT_DATABASE();

app.use(cors());

// app.use('/api/signup', SIGNUP_ROUTE); 
app.use('/api/auth',AUTH_ROUTE);
app.use('/api/generals',GENERALS_ROUTE);
app.use("/api/catalogue",CATALOGUE_ROUTE);


app.get("/", (req, res) => {
    const countryNames = ["United States", "Canada", "United Kingdom"];
    console.log("Hello")
    res.json({ countries: countryNames });
});

app.listen(5000,()=>{
    console.log("Server Started on Port 5000");
});