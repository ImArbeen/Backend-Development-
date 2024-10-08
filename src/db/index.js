import mongoose from "mongoose";

import {DB_NAME} from "../constants.js";

const connectDb = async () => {
    try {
        const connectionDb = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected!! DB Host: ${connectionDb.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED", error);
        process.exit(1);
    }   
};

export default connectDb;
