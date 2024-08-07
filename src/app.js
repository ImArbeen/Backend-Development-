import express from "express";

import cors from "cors"

import cookieParser from "cookie-parser";

app.use (cors({
    origin : Process.env.CORS_ORIGIN,
    Credential:true
}))

app.use(express.json({limit:"16mb"}))
app.use (express.urlencoded({limit: "16mb"}))
app.use (express.static("public"))
app.use(cookieParser())

const app = express ();

export default app();