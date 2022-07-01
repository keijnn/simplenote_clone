//import modules
import React from 'react'

//import components
import { Header } from '../header/Header'
import { AddTags } from '../addTags/AddTags';
import { Note } from '../note/Note';

export const NoteField = () => {
  return (
    <div className='flex flex-col border-l border-b-blue w-72'>
        <Header />
        <Note />
        <AddTags />
    </div>
  )
}
