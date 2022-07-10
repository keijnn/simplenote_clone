import { createStore, createEvent } from 'effector'

export const $notes = createStore([
  {
    id: 1,
    title: 123,
    body: 123,
  },
])
export const $title = createStore([])
export const $activeNote = createStore('')

export const add = createEvent()
export const del = createEvent()
export const addTitle = createEvent()
export const addActiveNote = createEvent()

const addNote = (state, note) => {
  state.push(note)
  return [...state]
}

const deleteNote = (state, note) => {
  return [...state]
}

const setTitle = (state, title) => {
  return [...state]
}

const setActiveNote = (state, note) => {
    note ? state = note : state = ''
    console.log(state)
    return state
}

$notes
    .on(add, addNote).on(del, deleteNote)
    .on(addTitle, setTitle)

$activeNote
    .on(addActiveNote, setActiveNote)
