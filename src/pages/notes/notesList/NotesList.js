//import modules
import React, { useState } from "react"

export const NotesList = () => {
  //note list
  const list = ["123", "123", "123", "123", "123", "123", "123", "123", "123"]

  //state for active buttun
  const [activeNote, setActiveNote] = useState(list[0])

  //tailwind styles for active and disabled buttons
  const activeStyle = "flex justify-center h-16 pt-3 flex-col bg-active"
  const disabledStyle = "flex justify-center h-16 pt-3 flex-col hover:bg-b-blue"

  return (
    <div className="h-full">
      <ul className="h-85 overflow-scroll">
        {list.map((note, i) => {
          return (
            <li
              className={activeNote === i ? activeStyle : disabledStyle}
              onClick={() => setActiveNote(i)}
              key={i}
            >
              <li className="h-full w-full">
                <div className="h-full ml-7 w-89 border-b border-b-blue">
                  <p className="text-sm">{note}</p>
                  <p className="text-sm">{note}</p>
                </div>
              </li>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
