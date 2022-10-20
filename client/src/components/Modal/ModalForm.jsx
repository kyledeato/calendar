import {React, useState} from 'react'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import axios from 'axios'
const ModalForm = (props) => {
  const {userID} = props
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [label, setLabel] = useState("red")
  const date = dayjs().format('MM-DD-YYYY')

  const handleSubmit = e => {
    e.preventDefault()
    const data = {title, description, label, date}
    axios.post('http://localhost:8000/api/event/create', data, {withCredentials:true })
        .then((res) => {
          console.log(res)
          
        })
        .catch((err)=> {
          console.log(err)
        })
  }


  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" className='border-black bg-green-200' placeholder='input box...' onChange={(e) => setTitle(e.target.value)}/>
        <br />
        <label htmlFor="description">Description</label>
        <input id="description" type="text" className='border-black bg-green-200' placeholder='input box...' onChange={(e) => setDescription(e.target.value)}/>
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
      <p>here</p>
      <p>{userID}</p>
    </div>
  )
}

export default ModalForm