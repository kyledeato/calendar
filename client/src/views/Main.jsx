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
        <React.Fragment>
            <CalendarHeader/>
            <div className='h-4/6 flex flex-columns'>
                    <div className='flex flex-1'>
                    <Sidebar/>
                    <Month month={currentMonth}/>
                    </div>
            
            </div>
        </React.Fragment>
    )
}

export default Main