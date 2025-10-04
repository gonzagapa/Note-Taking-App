import { apiNote } from "./apiInstance"
import type { Note, NoteResponse } from "./types";


export const getAllNotes = async():Promise<Note[]>=>{
    const res = await apiNote.get<NoteResponse[]>("/notes");
    const notes =  res.data;
    console.log({notes});

    return notes.map((note):Note=>{
        return {
            "_id":note._id,
            "title":note.title,
            "content":note.content,
            "createdAt":note.createdAt
        }
    })
}

export const getNoteById = async(id:string|undefined = '')=>{

    if(id.length<0){
        throw new Error("id is empty")
    }

    const {data} = await apiNote.get<NoteResponse>(`notes/${id}`)
    return data;
}

type NewNote = {title:string, content:string}

export const createNewNote = async(newNote:NewNote)=>{
    const res = await apiNote.post<NewNote>("/notes",
        {
            title:newNote.title,
            content:newNote.content
        }
    )
    return res.status
}
export const deleteNote = async(id:string)=>{
    const res = await apiNote.delete(`/notes/${id}`)

    return res.status;
}

interface UpdatedNote  {
    _id:string,
    title:string,
    content:string
}

export const updateNote = async(note:UpdatedNote)=>{
    const res = await apiNote.put(`/notes/${note._id}`,{
        ...note
    })

    return res.status
}