import {React, useState} from 'react'
import dayjs from 'dayjs'
import { Modal } from './Modal/Modal'
import { useEffect } from 'react'
const Day = (props) => {
  const {user, day, rowIdx, event, userID, refresh} = props
  const [list, setList] = useState([])
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "bg-blue-600 text-white rounded-full w-7" : ''
  }
  const [isOpen, setIsOpen] = useState(false)

  // NEEDS TO REFRESH AFTER SUBMITTING MODAL FORM
  useEffect(() => {
    const listOfEvents = []
    event.map(event => {
      // console.log(event.date )
      if (event.date === day.format('MM-DD-YYYY')) {
        listOfEvents.push(event)
        // console.log("lilistOfEventsst: ",listOfEvents)
      }
    })
    setList(listOfEvents)
    

  }, [day, user, event, isOpen, refresh])


  return (
    <div className='border border-gray-200 flex flex-col'>
        <header className='flex flex-col items-center'>
          {rowIdx === 0 && (
            <p className='text-sm mt-1'> {day.format('ddd').toUpperCase()}</p>
          )}
            <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.format('DD')}</p>
        </header>

        <button className='bg-green-300' onClick={()=> setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => {setIsOpen(false)}} day={day} user={userID} refresh={refresh} list={list}>

        </Modal>
        <br />
        {list ?
        list.map((event, idx)=>{
          //{console.log("event.user:",event.user, "userID:", userID)}
          return <p key={idx}>{event.date === day.format('MM-DD-YYYY') && event.user === userID? <p>
            {/* list of events here */}
            <button className='bg-green-300' onClick={()=> setIsOpen(true)}>{event.title} </button>
            <Modal open={isOpen} onClose={() => {setIsOpen(false)}} day={day} user={userID} refresh={refresh} list={list} postId={event._id}></Modal>
          </p> : <></>}</p>
        }) 
        :
        <></>}
    </div>
  )
}

export default Day