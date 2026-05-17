import React, { useState } from 'react'

const AddNoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, details);
    onAddNote({ title, details })
    setTitle('')
    setDetails('')
  }

  return (
    <form onSubmit={(e) => {
    submitHandler(e)
    }
    }
      className='flex px-4 py-4 w-full items-center flex-col rounded-3xl
        bg-linear-to-br from-[#1a7659] via-[#2d9b7e] to-[#16a085] shadow-xl
      '>
      <h1 className='w-full text-[20px] font-medium text-white'>Add Task</h1>

      <input type="text"
        placeholder='Task Title'
        className='px-3 py-2 mt-2 mb-4 w-full h-12 border-0 rounded-lg outline-none font-semibold bg-white/80 text-gray-800 placeholder-gray-500'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />

      <textarea type="text" placeholder="Task Details..."
        className='px-3 py-2 h-24 w-full mb-4 border-0 outline-none rounded-lg font-semibold bg-white/80 text-gray-800 placeholder-gray-500 resize-none'
        value={details}
        onChange={(e) => {
          setDetails(e.target.value)
        }}
      />

      <button className='bg-[#1a7659] text-white text-[17px] text-center px-10 lg:px-16 h-10 rounded-xl font-medium
        cursor-pointer hover:bg-[#15603f] active:scale-95 duration-200 ease-in-out shadow-lg active:shadow-md
      '>
        Add Task
      </button>
    </form>
  )
}

export default AddNoteForm