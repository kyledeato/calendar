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
const Main = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const {monthIndex} = useContext(GlobalContext)

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
      }, [monthIndex]);

    const [user, setUser] = useState({username: "guest"});
    const userID = user._id;



    useEffect(() => {
        axios.get('http://localhost:8000/api/auth', {withCredentials: true})
            .then(res => {
            console.log("USE EFFECT: ",res.data)
            setUser(res.data)
            console.log(user._id)
            })
            .catch(err=> console.log(err))
    }, [])

    return (
        <React.Fragment>
            <CalendarHeader user={user}/>
            <div className='h-4/6 flex flex-columns'>
                    <div className='flex flex-1'>
                    <Sidebar/>
                    <Month month={currentMonth} userID={userID}/>
                    </div>
            
            </div>
        </React.Fragment>
    )
}

export default Main