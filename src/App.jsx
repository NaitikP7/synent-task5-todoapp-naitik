import React, { useEffect, useState } from 'react'
import AddNoteForm from './components/AddNoteForm'
import NotesList from './components/NotesList'
import Time from './components/Time'
import Calendar from './components/Calendar'
import './components/SideBar.css'


const App = () => {
  const [task, setTask] = useState(()=>{
    const savedTasks = JSON.parse(localStorage.getItem("synent-tasks"))

    return savedTasks? savedTasks : [];
  })
  const current = new Date().toLocaleDateString();
  const handleAddNote = (note) => {
    const copyTask = [...task]
    copyTask.push({ ...note, completed: false })
    console.log(copyTask)
    setTask(copyTask)
  }

  useEffect(()=>{
    localStorage.setItem(
      "synent-tasks",
      JSON.stringify(task)
    )
  },[task])

  const toggleCompleted = (index) => {
    const copyTask = [...task]
    copyTask[index].completed = !copyTask[index].completed
    setTask(copyTask)
  }

  const deleteCard = (index) => {
    let copyTask = [...task]
    copyTask.splice(index,1);
    setTask(copyTask)
  }


  return (
    <div className='h-screen overflow-auto lg:flex bg-linear-to-br from-[#fef5e7] via-[#f9e4c8] to-[#fefdf7] text-black'>
      <div className='flex py-2 px-10 lg:w-3/10 items-center flex-col gap-6 lg:rounded-r-4xl bg-linear-to-b from-[#fefdf7] to-[#f5e0ce] shadow-lg'>
        <Time />  
        <AddNoteForm onAddNote={handleAddNote} />
        <Calendar />
      </div>
        <NotesList task={task} current={current} onToggleCompleted={toggleCompleted} deleteCard={deleteCard} />      
    </div>
  )
}

export default App