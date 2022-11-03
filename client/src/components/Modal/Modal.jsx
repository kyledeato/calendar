import { React} from 'react'
import ReactDOM from "react-dom"
import dayjs from 'dayjs'
import { useState } from 'react'
import ModalForm from './ModalForm'
import { useEffect } from 'react'
export const Modal = (props) => {
    const {children, open, onClose, day, user, refresh, list, postId} = props
    

    if (!open) return null
    


    console.log("model user", user)
    return ReactDOM.createPortal(
        <>
            <div className='fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-1000 flex justify-center items-center'>
                <div className='fixed z-1000 bg-white  w-5/6 h-5/6'>
                    <button className='bg-red-500' onClick={onClose}>Close modal</button>
                    {children}
                    <h1>{day.format('MMMM D')}</h1>
                    <h1>{day.format('dddd')}</h1>
                    
                    
                    <ModalForm userID={user} day={day} onClose={onClose} refresh={refresh} list={list} postId={postId}/>
                    
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
