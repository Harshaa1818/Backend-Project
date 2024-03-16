import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app=express()

app.use(cors(
{
    origin: process.env.ORIGIN_NAME,
    credentials: true

}))

app.use(express.json({limit: "16 Kb"}))
app.use(express.urlencoded({limit: "16kb", extended:true}))
app.use(express.static("public"))
app.use(cookieParser());


export default app;
