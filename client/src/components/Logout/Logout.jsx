import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Logout = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/user/logout", {}, {withCredentials: true})
        .then(res => {
            console.log(res)
            navigate('/login')
            console.log("you are logged out")
        })
        .catch(err => console.log(err))
    }
    return (
        <button className='logout bg-red-200' onClick={handleSubmit}>Logout</button>
    )
}

export default Logout