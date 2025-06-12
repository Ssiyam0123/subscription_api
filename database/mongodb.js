import mongoose from 'mongoose'
import {DB_URI} from '../config/env.js'

const connectToDatabase = async ()=>{
    try {
        await mongoose.connect(DB_URI);
        console.log("connected to mongodb");
    } catch (error) {
        console.error('error while connecting to database', error);
        process.exit(1);

    }
}

export default connectToDatabase;
