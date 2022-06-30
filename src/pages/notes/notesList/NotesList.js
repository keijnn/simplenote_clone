import React from "react"


export const NotesList = () => {
  const list = ["123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "123", "223"]

  return (
    <div className="h-full">
      <ul className="h-85 overflow-scroll">
        {list.map((note) => {
          return (
            <li className="flex justify-center h-16 pt-3 flex-col hover:bg-b-blue active:bg-active">
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
