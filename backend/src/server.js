import dotenv from "dotenv";
import rateLimiter from './middleware/rateLimiter.js';
import cors from "cors";
import express from 'express';
import NoteRouter from './routes/notesRoutes.js';
import { connectDb } from './config/db.js';
import path from "path"
import { env } from "process";

dotenv.config() //leer variables del env 
const app = express();
const port = process.env.PORT ?? 5001;
const __dirname = path.resolve()

if (process.env.NODE_ENV !== "production") {
    app.use(cors())
}

//middlewares
app.use(express.json())
app.use(rateLimiter)

app.use("/api/notes", NoteRouter) //Rutas, compuestas por un controllador

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

connectDb().then(() => {
    app.listen(port, () => {
        console.log("Server started on Port", port);
    });
})
