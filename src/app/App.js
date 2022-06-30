import { NoteField } from 'pages/newNote/noteField/NoteField';
import { NotesField } from "pages/notes/notesField/NotesField";

export const App = () => {
  return (  
  <div className="text-white flex justify-between bg-dark-blue w-screen max-h-screen font-mono tracking-wider">
    <NotesField />
    <NoteField />
  </div>
  )
}

