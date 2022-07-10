//import modules
import React from 'react'

//import components
import { Header } from './Header'
import { AddTags } from './AddTags';
import { Note } from './Note';

export const NoteField = () => {
  return (
    <div className='flex flex-col border-l border-b-blue w-72'>
        <Header />
        <Note />
        <AddTags />
    </div>
  )
}
