import React from 'react'
import { useState, useEffect } from 'react'

const Time = () => {

  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toLocaleString([], {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(
        new Date().toLocaleString([], {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='flex py-8 mt-2 w-full justify-center items-center lg:text-lg font-semibold rounded-3xl 
        bg-linear-to-r from-[#f39c12] via-[#e8a76b] to-[#f5dcc4] shadow-xl
         text-white
    '>
      {currentDateTime}
    </div>
  )
}

export default Time