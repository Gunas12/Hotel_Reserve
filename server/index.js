//CURL=mongodb+srv://Gunas:<password>@cluster0.pspovwz.mongodb.net/?retryWrites=true&w=majority
//PASSWORD=salam1234
//PORT=4000
//JWT=alma

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotel.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
app.get("/", (req, res) => {
    res.send("<h1>Admin panel</h1>")
})
mongoose.set('strictQuery', true);
const connect = async () => {
    try {
        await mongoose.connect(process.env.CURL.replace("<password>", process.env.PASSWORD));
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};


//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});
const port = process.env.PORT
app.listen(port, () => {
    connect();
    console.log("Connected to backend.");
});
