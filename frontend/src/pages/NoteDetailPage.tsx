import { ArrowLeftIcon, Trash2Icon } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import type { NoteResponse } from "../api/types";
import { useNoteOperations } from "../home/hooks";

type Props ={
  note:NoteResponse
}

export default function NoteDetailPage({note}:Props) {
  const [title,setTitle] =useState(note.title)
  const [content, setcontent] = useState(note.content)
  const {noteMutationDelete,noteMutationUpdate} = useNoteOperations()
  const navigate = useNavigate()  

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    noteMutationUpdate.mutate({_id:note._id,title,content})
  }

  const handleDelete =  ()=>{    
    noteMutationDelete.mutateAsync(note._id).then(()=>{
      navigate("/")
    })
  }
  
  return (
    <main className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
         <div className="max-w-lg mx-auto">

          <header className="flex justify-between items-center">
            <Link to={"/"} className="btn btn-ghost mb-6 hover:bg-slate-700">
              <ArrowLeftIcon className="size-5"/>
              <span>Back to Home</span>
            </Link>
            <button onClick={handleDelete} className="btn btn-outline btn-error"> 
              <Trash2Icon className="size-4"/> Delete note</button>
          </header>

          <div className="card bg-base-100">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Update note</h2>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-3 mb-4">
                    <label className="label">
                      <span className="label-text">Title</span>
                    </label>
                    <input 
                    className="input input-bordered w-full" 
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)}
                    required/>
                  </div>
                  <div className="flex flex-col gap-3 mb-4 text-white">
                    <label className="label">
                       <span className="label-text">Title</span>
                    </label>
                    <textarea 
                    rows={5}
                    value={content}
                    onChange={(e) => setcontent(e.target.value)}
                    className="textarea textarea-bordered h-32 w-full" placeholder="Write your note"
                    required/>
                  </div>
                  <div className="card-actions justify-end">
                    <button type="submit" className="btn btn-primary" disabled={noteMutationUpdate.isPending}>
                      Update note
                    </button>
                  </div>
                </form>
              </div>
            </div>

         </div>
      </div>
    </main> 
  )
}
