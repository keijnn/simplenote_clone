import { configureStore } from "@reduxjs/toolkit"
import notesListReducer from "features/notesList/NotesListSlice"

export const store = configureStore({
  reducer: {
    notesList: notesListReducer,
  },
})
