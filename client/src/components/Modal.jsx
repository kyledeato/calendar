import { React} from 'react'
import ReactDOM from "react-dom"
import dayjs from 'dayjs'
export const Modal = ({children, open, onClose, day}) => {
  if (!open) return null
  return ReactDOM.createPortal(
    <>
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-1000 flex justify-center items-center'>
            <div className='fixed z-1000 bg-white  w-5/6 h-5/6'>
                <button className='bg-red-500' onClick={onClose}>Close modal</button>
                {children}
                <h1>{day.format('MMMM D')}</h1>
                <h1>{day.format('dddd')}</h1>
                <p>This is in the modal</p>
            </div>
        </div>
    </>,
    document.getElementById('portal')
  )
}
