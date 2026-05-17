import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './Calendar.css'

const Calender = () => {

  return (
    <div className='rounded-3xl overflow-hidden outline-none hidden lg:block shadow-xl border-4 border-[#1a7659]/20'>
      <Calendar />
    </div>
  )
}

export default Calender