
import { useQuery } from "@tanstack/react-query";
import { NoteList } from "./NoteList";
import { getAllNotes } from "../../api/actions";
import RateLimitedUI from "../../shared/components/RateLimit";


export function FetchingNotes() {

    const {data:notes, isPending, isError} = useQuery({
        queryKey:["notes"],
        queryFn:getAllNotes,
        staleTime:1000*60*2 //2 minutes
    })

    if(isPending){
        return <p>Loading notes...</p>
    }

    if(isError){
        return <RateLimitedUI/>
    }
  return (
    <>
        <NoteList notes={notes}/>
    </>
  )
}
