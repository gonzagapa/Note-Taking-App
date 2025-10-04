import { PenSquareIcon, Trash2Icon } from "lucide-react";
import type { Note } from "../../api/types";
import { Link } from "react-router";
import { formatDate } from "../../libs/utils";
import { useNoteOperations } from "../hooks";



export function NoteCard({_id,content,title,createdAt}:Note) {

  const {noteMutationDelete} = useNoteOperations()

  const handleDelete = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault();
    noteMutationDelete.mutate(_id)
  }
  return (
    <Link to={`/note/${_id}`}>
        <div data-id={_id} className="card w-96 bg-base-100 rounded-md card-xs shadow-sm shadow-slate-600 border-t-4 border-primary">
          <div className="card-body">
            <h2 className="card-title text-base-content">{title}</h2>
            <p className="text-base-content/70 line-clamp-3">{content}</p>
            <div className="card-actions justify-between items-center mt-4">
              <span className="text-sm text-base-content/60">{formatDate(new Date(createdAt.toString()))}</span>
              <div className="flex items-center gap-3">
                <PenSquareIcon className="size-4 cursor-pointer"/>
                <button 
                onClick={(e)=>handleDelete(e)}
                disabled={noteMutationDelete.isPending}
                className={`btn btn-ghost btn-xs text-error group`}>
                  <Trash2Icon className="size-4 group-disabled:text-error/90"/>
                </button>
              </div>
            </div>
          </div>
      </div>
    </Link>
  )
}
