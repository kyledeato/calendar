import {React, useState} from 'react'
import dayjs from 'dayjs'
import { Modal } from './Modal/Modal'
import { useEffect } from 'react'
const Day = (props) => {
  const {user, day, rowIdx, event, userID, refresh, monthBg} = props
  const [list, setList] = useState([])
  const currentMonth = dayjs().format("DD-MM-YY")
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "bg-blue-600 text-white rounded-full w-7" : ''
  }
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log(monthBg)
    const listOfEvents = []
    event.map(event => {

      if (event.date === day.format('MM-DD-YYYY')) {
        listOfEvents.push(event)
 
      }
    })
    setList(listOfEvents)
  }, [day, user, event, isOpen, refresh])


  return (
    <div className={`border-2 flex flex-col border-skin-${monthBg.toLowerCase()} bg-skin-${monthBg.toLowerCase()}Primary shadow-md  w-full  max-h-55 h-full`}>
        <header className='flex flex-col items-center text-white'>
          {rowIdx === 0 && (
            <p className='text-sm mt-1'> {day.format('ddd').toUpperCase()}</p>
          )}
            <p className={`text-white  text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.format('DD')}</p>
        </header>

        <button className='text-white' onClick={()=> setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => {setIsOpen(false)}} day={day} user={userID} refresh={refresh} list={list}>

        </Modal>
        <br />
        {list ?
        list.map((event, idx)=>{
          //{console.log("event.user:",event.user, "userID:", userID)}
          return <p key={idx}>{event.date === day.format('MM-DD-YYYY') && event.user === userID? <p>
            {/* list of events here */}
            <button className='text-white w-full ' onClick={()=> setIsOpen(true)}>{event.title} </button>
            <Modal open={isOpen} onClose={() => {setIsOpen(false)}} day={day} user={userID} refresh={refresh} list={list} postId={event._id}></Modal>
          </p> : <></>}</p>
        }) 
        :
        <></>}
    </div>
  )
}

export default Day