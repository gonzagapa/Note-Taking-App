import express from 'express';
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notesController.js'

const NoteRouter = express.Router();

//cada ruta le corresponde una accion de un controllador
NoteRouter.get("/", getAllNotes)
NoteRouter.get("/:id", getNoteById)

NoteRouter.post("/", createNote);

NoteRouter.put("/:id", updateNote)

NoteRouter.delete("/:id", deleteNote)

export default NoteRouter;
