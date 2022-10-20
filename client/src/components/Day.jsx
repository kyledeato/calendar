import {React, useState} from 'react'
import dayjs from 'dayjs'
import { Modal } from './Modal/Modal'
import { useEffect } from 'react'
const Day = (props) => {
  const {user, day, rowIdx, event} = props
  const [list, setList] = useState([])
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "bg-blue-600 text-white rounded-full w-7" : ''
  }


  useEffect(() => {
    const listOfEvents = []
    console.log("EVENT",event)
    event.map(event => {
      // console.log(event.date )
      if (event.date === day.format('MM-DD-YYYY')) {
        listOfEvents.push(event)
        // console.log("lilistOfEventsst: ",listOfEvents)
      }
    })
    setList(listOfEvents)
    // console.log("list", listOfEvents)
  }, [user])
  

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='border border-gray-200 flex flex-col'>
        <header className='flex flex-col items-center'>
          {rowIdx === 0 && (
            <p className='text-sm mt-1'> {day.format('ddd').toUpperCase()}</p>
          )}
            <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.format('DD')}</p>
        </header>
        <div>
          <p>here</p>
        </div>
        <button className='bg-green-300' onClick={()=> setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} day={day} user={user}>

        </Modal>
        <br />
        {list ?
        list.map((event, idx)=>{
          return <p key={idx}>{event.title}, {event.date}</p>
        }) 
        :
        <></>}
    </div>
  )
}

export default Day