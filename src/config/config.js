import dotenv from "dotenv"; 
import program from "../utils/commander.js"; //mas adelante uso para desarr y prodcc


dotenv.config();

let configObject = {
    puerto: process.env.PUERTO || 8080,
    mongo_url: process.env.MONGO_URL
}

export default configObject;
