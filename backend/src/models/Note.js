import mongoose from 'mongoose';

// 1: Creas un schema: 
// 2: creas un modelo basaso en ese schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
    },
    { timestamps: true } //incluye createdAt, updatedAt
);

//Model es una clase que construye los documentos basado en nuestro esquema
const Note = mongoose.model("Note", noteSchema);
export default Note;