import dotenv from "dotenv";
import rateLimiter from './middleware/rateLimiter.js';
import cors from "cors";
import express from 'express';
import NoteRouter from './routes/notesRoutes.js';
import { connectDb } from './config/db.js';

dotenv.config() //leer variables del env 
const app = express();
const port = process.env.PORT ?? 5001;



//middlewares
app.use(cors())
app.use(express.json())
app.use(rateLimiter)

app.use("/api/notes", NoteRouter) //Rutas, compuestas por un controllador

connectDb().then(() => {
    app.listen(port, () => {
        console.log("Server started on Port", port);
    });
})
