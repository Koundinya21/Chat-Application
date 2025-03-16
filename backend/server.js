import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import path from "path"

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from './db/connectToMongoDB.js';
import {app,server} from './socket.js/socket.js';


app.use(cookieParser());

const __dirname=path.resolve()

dotenv.config();
const PORT=process.env.PORT || 5000;

// app.get('/',(req,res)=>{
//     res.send("Hellow World")
// })

app.use(express.json()); // to parse the incomming response with json payloads(from req,body)

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(res,req)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(PORT,async ()=> {
    await connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)

});