import dayjs from 'dayjs';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext'
import axios from 'axios'
import Logout from './Logout/Logout';


const CalendarHeader = (props) => {
  const {user, monthBg} = props
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  console.log(monthBg)
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1)
  }

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1)
    
  }



  return (
    <header className={`px-4 py-2 flex items-center bg-skin-${monthBg.toLowerCase()}  `}>
      <h1>Calendar</h1>
      <button className='border rounded py-2 px-4 mr-5' >
        Today
      </button>
      <button className='material-icons cursor-pointer text-gray-600 mx-2 hover:bg-blue-300' onClick={handlePrevMonth}>
        <span>chevron_left</span>
      </button>
      <button className='material-icons cursor-pointer text-gray-600 mx-2 hover:bg-blue-300' onClick={handleNextMonth}>
        <span>chevron_right</span>
      </button>
      <h2 className='ml-4 text-xl font-bold ' >
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <br />
      <h1>Hello, {user.username}</h1>
      <Logout/>
    </header>
  )
}

export default CalendarHeader