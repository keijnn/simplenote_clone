import { NoteField } from 'pages/newNote/NoteField';
import { NotesField } from "pages/notes/NotesField";

export const App = () => {
  return (  
  <div className="flex justify-between bg-dark-blue w-screen h-screen font-mono tracking-wider">
    <NotesField />
    <NoteField />
  </div>
  )
}

