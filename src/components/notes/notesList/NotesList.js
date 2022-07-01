//import modules
import React, { useState } from "react"
import { useSelector, useDispatch  } from "react-redux"

//import components


export const NotesList = () => {
  //note list
  const list = useSelector(state => state.notesList)

  //state for active buttun
  const [activeNote, setActiveNote] = useState(list[0])

  //tailwind styles for active and disabled buttons
  const activeStyle = "flex justify-center h-16 pt-3 flex-col bg-active"
  const disabledStyle = "flex justify-center h-16 pt-3 flex-col hover:bg-b-blue"

  return (
    <div className="h-full">
      <ul className="h-85 overflow-scroll">
        {list.map((note) => {
          return (
            <li
              className={activeNote === note.id ? activeStyle : disabledStyle}
              onClick={() => {setActiveNote(note.id)}}
              key={note.id}
            >
              <li className="h-full w-full">
                <div className="h-full ml-7 w-89 border-b border-b-blue">
                  <p className="py-1 font-semibold">{note.title}</p> 
                </div>
              </li>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
