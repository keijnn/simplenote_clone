//import modules
import React from 'react'

//import components
import { Header } from './Header'
import { NotesList } from './NotesList'
import { Search } from './Search'



export const NotesField = () => {
  return (
    <div className="w-28">
      <Header />
      <Search />
      <NotesList />
    </div>
  )
}
