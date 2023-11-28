import mongoose, { Schema } from "mongoose";
const notesSchema = new mongoose.Schema({ title: String, noteData: String },
    {
        timestamps:true,
    }
    );
const Note = mongoose.models.Note || mongoose.model('Note', notesSchema);

export default Note;