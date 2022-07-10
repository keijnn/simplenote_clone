import { NoteField } from 'components/newNote/NoteField';
import { NotesField } from "components/notes/NotesField";

export const App = () => {
  return (  
  <div className="text-white flex justify-between bg-dark-blue w-screen h-screen tracking-wider">
    <NotesField />
    <NoteField />
  </div>
  )
}

