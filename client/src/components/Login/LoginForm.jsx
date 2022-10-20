import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedin, setLoggedIn] = useState(false)
    const navigate = useNavigate()
    const [errorMessages, setErrorMessages] = useState({});

    const errors = {
      username: "invalid username",
      password: "invalid password"
  };

  const renderErrorMessage = (name) =>
      name === errorMessages.name && (
          <div className="error">{errorMessages.message}</div>
      );

    const handleSubmit = (e) => {
      e.preventDefault();

      axios.post("http://localhost:8000/api/user/login", {
          username,
          password
      }, { withCredentials: true })

          .then(res => {
              setLoggedIn(true)
              console.log(res)
              navigate('/')
          })
          .catch(err => {
              const errArr = []
              const errResData = err.response.data.errorMessages
              console.log(errResData)
              // if (user) {
              //     if (user.password !== password.value) {
              //         setErrorMessages({ name: "pass", message: "username or password is incorrect" });
              //     }
              // }
          })
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Enter Username</h1>
            <input type="text" className='border-black- bg-green-200' placeholder='user'onChange={(e) => setUsername(e.target.value)}/>
            <h1>Password</h1>
            <input type="text" className='border-black bg-green-200' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            <button className='bg-blue-100 border-blue-50'>Submit</button>
        </form>
    </div>
  )
}

export default LoginForm