//import modules
import React from "react"


export const Note = () => {
  return (
    <div className="mt-24 box-border h-full">
      <textarea 
      value="123123123"
      className="bg-dark-blue px-24 
      h-full w-full resize-none 
      focus:outline-none hover:overflow-visible
      "/>
    </div>
  )
}