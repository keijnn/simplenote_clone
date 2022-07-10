//import modules
import React from "react"
import { useStore } from "effector-react"

//import components
import { $activeNote } from 'models/notes'


export const Note = () => {

  const note = useStore($activeNote)

  return (
    <div className="mt-24 box-border h-full">
      <textarea 
      value={note}
      className="bg-dark-blue px-24 
      h-full w-full resize-none 
      focus:outline-none hover:overflow-visible
      "/>
    </div>
  )
}
