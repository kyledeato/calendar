import {React, useState} from 'react'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import axios from 'axios'
const ModalForm = (props) => {
  const {userID, day, onClose, refresh, event, list, postId} = props
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [label, setLabel] = useState("red")
  const date = day.format('MM-DD-YYYY')

  useEffect(()=>{
    if (postId) {
      axios.get(`http://localhost:8000/api/event/${postId}`, {withCredentials: true})
      .then((res)=> {
        console.log("RES",res)
        console.log(res.data.title)
         setTitle(res.data.title)
         setDescription(res.data.description)
      })
    }
  }, [postId])

  const handleSubmit = e => {
    e.preventDefault()
    const user = userID
    const data = {title, description, label, date, user}
    if (postId) {
      axios.put(`http://localhost:8000/api/event/${postId}`, data, {withCredentials:true })
          .then((res) => {
            console.log(res)
            onClose()
            refresh(true)
            // refreshPage()
  
          })
          .catch((err)=> {
            console.log(err)
          })
    } else {

      axios.post('http://localhost:8000/api/event/create', data, {withCredentials:true })
          .then((res) => {
            console.log(res)
            onClose()
            refresh(true)
            // refreshPage()
  
          })
          .catch((err)=> {
            console.log(err)
          })
    }
  }

    const deleteEvent = () => {
      axios.delete(`http://localhost:8000/api/event/${postId}`, {withCredentials:true})
      .then((res) => {
        onClose()
        refresh(true)
      })
      .catch(err => console.log(err))
    }

  


  
  return (
    <div>
      <button className='bg-red-200 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={deleteEvent}>DELETE</button>
      <form onSubmit={handleSubmit}>
   
        <label htmlFor="title">Title</label>
        <input id="title" type="text" className='border-black bg-green-200' placeholder='input box...' onChange={(e) => setTitle(e.target.value)} value={title}/>
        <br />
        <label htmlFor="description">Description</label>
        <input id="description" type="text" className='border-black bg-green-200' placeholder='input box...' onChange={(e) => setDescription(e.target.value)} value={description}/>
        <br />
       

        <div className="radio">
          <label>
            <input type="radio" value="red" checked={label === "red"} onChange={(e) => setLabel(e.target.value)} />
            Red
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="blue" checked={label === "blue"} onChange={(e) => setLabel(e.target.value)}/>
            Blue
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="green" checked={label === "green"} onChange={(e) => setLabel(e.target.value)}/>
            Green
          </label>
        </div>
      
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Enter</button>
      </form>


    </div>
  )
}

export default ModalForm