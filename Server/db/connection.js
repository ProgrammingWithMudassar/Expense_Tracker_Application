import mongoose from 'mongoose'
import dotenv from "dotenv"

//environment file
dotenv.config({ path: "./config.env" })


const conn = mongoose.connect(process.env.ALTAS_URI)
    .then((db) => {
        console.log("Database Connected.");
        return db;
    })
    .catch((err) => {
        console.log("Connection Failed");
    })

export default conn;