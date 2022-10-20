import { useState, React } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const RegisterForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
	const [errors, setErrors] = useState({})

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://localhost:8000/api/user/register', {username, password}, {withCredentials:true})
			.then(res => {
				console.log(res)
				navigate('/')
			})
			.catch(err => {
				const errArr = []
				const errResData = err.response.data.errors
                console.log(errResData)
                for (const key in errResData) {
                    errArr.push(errResData[key]["message"])
                }
                setErrors(errArr)
				console.log(err)
			})
	}

	const renderErrorMessage = (name) =>
	name === errors.name && (
		<div className="error">{errors.message}</div>
	);
	return (
		<div>
			<h1>REGISTER FORM</h1>
			<form onSubmit={handleSubmit}>
				<h1>Enter Username</h1>
				<input type="text" className='border-black- bg-green-200' placeholder='user' onChange={(e) => setUsername(e.target.value)}/>
				{renderErrorMessage("username")}
				<br />
				<h1>Password</h1>
				<input type="text" className='border-black bg-green-200' placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
				{renderErrorMessage("password")}
				<button className='bg-blue-100 border-blue-50'>Submit</button>
			</form>
		</div>
	)
}

export default RegisterForm