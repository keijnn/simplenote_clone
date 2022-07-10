//import modules
import React, { useState } from 'react'
import { useStore } from 'effector-react'

//import components
import { $notes, addActiveNote } from 'models/notes'

export const NotesList = () => {
  //note list

  const list = useStore($notes)

  //state for active button
  const [activeNote, setActiveNote] = useState()

  //tailwind styles for active and disabled buttons
  const activeStyle = 'flex justify-center h-16 pt-3 flex-col bg-active'
  const disabledStyle = 'flex justify-center h-16 pt-3 flex-col hover:bg-b-blue'

  return (
    <div className="h-full">
      <ul className="h-85 overflow-scroll">
        {list.map((note) => {
          return (
            <li
              className={activeNote === note.id ? activeStyle : disabledStyle}
              onClick={() => {
                setActiveNote(note.id)
                addActiveNote(note.body)
              }}
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
