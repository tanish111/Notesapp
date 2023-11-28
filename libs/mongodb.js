import { NextResponse } from 'next/server';
import Note from '../models/notes';

const mongoose = require('mongoose');

const  connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
      } catch (err) {
        console.log("Internal Database Connection Error!!!");
        console.log(err);
      }

}
export default connectMongoDB;