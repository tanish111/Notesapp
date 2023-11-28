import { NextResponse } from 'next/server';
import Note from '../models/notes';

const mongoose = require('mongoose');

const  connectMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://tanishdesai37:Tanhim2004@cluster0.htwou4k.mongodb.net/CSA");
        console.log("Connected");
      } catch (err) {
        console.log("Internal Database Connection Error!!!");
        console.log(err);
      }

}
export default connectMongoDB;