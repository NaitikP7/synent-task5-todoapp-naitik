import React from 'react'
import NoteCard from './NoteCard'

const NotesList = ({ task, current, onToggleCompleted, deleteCard }) => {
  return (
    <div className='lg:w-7/10 pt-10 pl-10 pr-2'>
      <h1 className='text-3xl font-medium text-gray-800'>Your Tasks</h1>
      <div id='notes' className='flex flex-wrap pt-5 overflow-auto h-[90%] gap-10 justify-center lg:justify-start'>
        {task.map((elem, idx) => {
          return <NoteCard key={idx} idx={idx} title={elem.title} details={elem.details} current={current} completed={elem.completed} onToggleCompleted={onToggleCompleted} deleteCard={deleteCard}/>
        })
        }
      </div>
    </div>
  )
}

export default NotesList
