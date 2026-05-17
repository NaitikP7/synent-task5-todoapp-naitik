import React, { useState } from 'react'
import AddNoteForm from './components/AddNoteForm'
import NotesList from './components/NotesList'
import Time from './components/Time'
import Calendar from './components/Calendar'
import './components/SideBar.css'
const App = () => {
  const [task, setTask] = useState([])
  const current = new Date().toLocaleDateString();

  const handleAddNote = (note) => {
    const copyTask = [...task]
    copyTask.push(note)
    console.log(copyTask)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-linear-to-br from-[#fef5e7] via-[#f9e4c8] to-[#fefdf7] text-black'>
      <div className='flex py-10 px-10 lg:w-3/10 items-center flex-col gap-6 rounded-r-4xl bg-linear-to-b from-[#fefdf7] to-[#f5e0ce] shadow-lg'>
        <Time />  
        <AddNoteForm onAddNote={handleAddNote} />
        <Calendar />
      </div>
        <NotesList task={task} current={current} />      
    </div>
  )
}

export default App