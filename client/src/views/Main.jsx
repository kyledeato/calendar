import React from 'react'
import CalendarHeader from '../components/CalendarHeader'
import Sidebar from '../components/Sidebar'
import Month from '../components/Month'
import { getMonth } from '../util'
import { useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import { useContext } from 'react'
import { useEffect } from 'react'

const Main = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const {monthIndex} = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
      }, [monthIndex]);

    return (
        <div>
            <CalendarHeader/>
            <div className='h-screen flex flex-columns'>
                    <div className='flex flex-1'>
                    <Sidebar/>
                    
                    <Month month={currentMonth}/>
                    </div>
            
            </div>
        </div>
    )
}

export default Main