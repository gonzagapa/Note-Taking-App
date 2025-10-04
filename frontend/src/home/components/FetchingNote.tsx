import { useQuery } from "@tanstack/react-query"
import { getNoteById } from "../../api/actions"
import NoteDetailPage from "../../pages/NoteDetailPage"
import { useParams } from "react-router"



export function FetchingNote() {
    const {id} = useParams();

    const {data:note,isError,isPending} = useQuery({
    queryKey:['get-note',id],
    queryFn: ()=>getNoteById(id)
  })

  if(isPending){
    return <p>Data Loading</p>
  }

  
  if(isError || !id){
    return <p>Server error</p>
  }


  return (
    <NoteDetailPage note={note}/>
  )
}
