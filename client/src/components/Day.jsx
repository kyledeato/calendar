import {React, useState} from 'react'
import dayjs from 'dayjs'
import { Modal } from './Modal'
const Day = ({day, rowIdx}) => {
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "bg-blue-600 text-white rounded-full w-7" : ''
  }

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='border border-gray-200 flex flex-col'>
        <header className='flex flex-col items-center'>
          {rowIdx === 0 && (
            <p className='text-sm mt-1'> {day.format('ddd').toUpperCase()}</p>
          )}
            <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.format('DD')}</p>
        </header>
            
        <button className='bg-green-300' onClick={()=> setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} day={day}>

        </Modal>
        <br />
    </div>
  )
}

export default Day