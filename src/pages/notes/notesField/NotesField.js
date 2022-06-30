//import modules
import React from 'react'

//import components
import { Header } from '../header/Header'
import { NotesList } from '../notesList/NotesList'
import { Search } from '../search/Search'


export const NotesField = () => {
  return (
    <div className="w-28">
      <Header />
      <Search />
      <NotesList />
    </div>
  )
}
