import type { Note } from "../../api/types"
import { NoteCard } from "./NoteCard"

type Props = {
    notes:Note[]
}

export function NoteList({notes}:Props) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 py-5 px-5">
        {notes.map((note)=>(
            <NoteCard key={note._id} {...note}/>
        ))}
    </div>
  )
}
