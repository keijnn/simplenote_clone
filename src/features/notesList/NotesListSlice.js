import { createSlice } from "@reduxjs/toolkit"


const initialState = []

export const notesListSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push({
        id: action.payload,
        title: action.payload,
        body: ''
      })
    },
    deleteNote: (state, action) => {
      state.splice(action, 1)
    },
  },
})

export const { addNote, deleteNote } = notesListSlice.actions
export default notesListSlice.reducer
