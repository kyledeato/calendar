import React from 'react'
import CalendarHeader from '../components/CalendarHeader'
import Sidebar from '../components/Sidebar'
import Month from '../components/Month'
import { getMonth } from '../util'
import { useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
const Main = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const {monthIndex} = useContext(GlobalContext)
    const [monthBg, setMonthBg] = useState("")

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
      }, [monthIndex]);

    const [user, setUser] = useState({username: "guest"});
    const userID = user._id;



    useEffect(() => {
        axios.get('http://localhost:8000/api/auth', {withCredentials: true})
            .then(res => {
            setUser(res.data)
            
            })
            .catch(err=> console.log(err))
    }, [])

    useEffect(() => {
        setMonthBg(dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM"))
 
    }, [currentMonth, monthIndex])

    return (
        <React.Fragment>
            <CalendarHeader user={user} monthBg={monthBg}/>
            <div className='h-4/6 flex flex-columns '>
                    <div className='flex flex-1'>
                    <Sidebar monthBg={monthBg}/>
                    
                    <Month month={currentMonth} userID={userID} monthBg={monthBg}/>
                    </div>
            
            </div>
        </React.Fragment>
    )
}

export default Main