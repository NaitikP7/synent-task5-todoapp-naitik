import React from 'react'
import NoteCard from './NoteCard'

const NotesList = ({ task, current, onToggleCompleted, deleteCard }) => {
  return (
    <div className='lg:w-7/10 pt-10 pl-10 pr-2 lg:h-screen flex flex-col'>
      <h1 className='text-2xl lg:text-3xl font-medium text-gray-800 '>Your Tasks</h1>
      <div id='notes' className='flex flex-wrap pt-5 pb-5 overflow-y-auto lg:flex-1 gap-10 justify-center lg:justify-start'>
        {task.map((elem, idx) => {
          return <NoteCard key={idx} idx={idx} title={elem.title} details={elem.details} current={current} completed={elem.completed} onToggleCompleted={onToggleCompleted} deleteCard={deleteCard}/>
        })
        }
      </div>
    </div>
  )
}

export default NotesList
