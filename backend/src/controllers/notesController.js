import Note from "../models/Note.js"

//controlador es un conjunto de acciones que se ejecutan de acuerdo a un endpoint
export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes", error);
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getNoteById = async (req, res) => {
    try {
        const notes = await Note.findById(req.params.id);
        if (!notes) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(notes);
    } catch (error) {

    }
}

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title, content });
        const savedNote = await newNote.save();//guardar el documento en la base de datos;

        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote", error);
        res.status(501).json({ message: "Internal server error" })
    }
}

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        //req.params.id = obtener el id desde la url
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, {
            new: true
        })
        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("Error in updatedNote", error);
        res.status(501).json({ message: "Internal server error" })
    }
}
export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id, {});
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" })
        }
        res.status(200).json({ message: "Note deleted" })
    } catch (error) {
        console.error("Error in updatedNote", error);
        res.status(501).json({ message: "Internal server error" })
    }
}