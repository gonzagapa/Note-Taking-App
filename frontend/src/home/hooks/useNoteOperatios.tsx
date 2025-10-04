import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteNote, updateNote } from "../../api/actions"
import toast from "react-hot-toast"


export  function useNoteOperations() {
    const queryClient = useQueryClient()


    const noteMutationUpdate = useMutation({
    mutationFn:updateNote,
    mutationKey:["update-note"],
    onSuccess:()=>{
      toast.success("Note updated")
      queryClient.invalidateQueries({
        queryKey:["notes"]
      })
      queryClient.invalidateQueries({
        queryKey:["get-note"]
      })
    },
    onError:() =>{
      toast.error(`A problem while updating the note`)
    },
  })

  const noteMutationDelete = useMutation({
      mutationFn:deleteNote,
      mutationKey:['delete-note'],
      onSuccess:()=>{
        queryClient.invalidateQueries({
          queryKey:["notes"]
        })
        toast.success("Note deleted successfully!")
      },
      onMutate:()=>{
        toast.loading("Deleting note...")
      },
      onError:()=>{
        toast.error("An error ocurred while deleting, try again.")
      },
      onSettled:()=>{
        toast.dismiss()
      }
    })


  return {
    noteMutationUpdate,
    noteMutationDelete
  }
}
