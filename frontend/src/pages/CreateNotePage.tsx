import { useMutation, useQueryClient } from "@tanstack/react-query";
import {ArrowLeftIcon } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import { createNewNote } from "../api/actions";
import toast from "react-hot-toast";


export default function CreateNotePage() {
  
  const queryClient = useQueryClient()
  const [title,setTitle] =useState("")
  const [content, setcontent] = useState("")

  const noteMutation = useMutation({
    mutationFn:createNewNote,
    mutationKey:["create-note"]
  })

  const handleSubmit = async (event:FormEvent)=>{
    event.preventDefault();
    console.log({title,content})
    try{
      const res = await noteMutation.mutateAsync({title,content}); 
      console.log(res);
      toast.success("Note created succesfully")
      queryClient.invalidateQueries({queryKey:["notes"]})
    }catch(error){
      toast.error("An error ocurred during note creation")
    }

  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
            <Link to={"/"} className="btn btn-ghost mb-6 hover:bg-slate-700">
              <ArrowLeftIcon className="size-5"/>
              <span>Back to Home</span>
            </Link>

            <div className="card bg-base-100">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Create a new note</h2>
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
                    <button type="submit" className="btn btn-primary" disabled={noteMutation.isPending}>
                      Create note
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
