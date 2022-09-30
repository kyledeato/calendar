import dayjs from 'dayjs';
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1)
  }

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1)
  }

  return (
    <header className='px-4 py-2 flex items-center'>
      <h1>Calendar</h1>
      <button className='border rounded py-2 px-4 mr-5'>
        Today
      </button>
      <button className='material-icons cursor-pointer text-gray-600 mx-2 hover:bg-blue-300' onClick={handlePrevMonth}>
        <span>chevron_left</span>
      </button>
      <button className='material-icons cursor-pointer text-gray-600 mx-2 hover:bg-blue-300' onClick={handleNextMonth}>
        <span>chevron_right</span>
      </button>
      <h2 className='ml-4 text-xl text-gray-500 font-bold'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  )
}

export default CalendarHeader