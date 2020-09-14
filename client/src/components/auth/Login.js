import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<form className='my-5 w-75 mx-auto'>
			<div className='form-group'>
				<label>Email address</label>
				<input type='email' className='form-control' required />
			</div>
			<div className='form-group'>
				<label>Password</label>
				<input type='password' className='form-control' required />
			</div>
			<small className='form-text text-muted mx-right text-right'>
				Not registered yet?
			</small>
			<div className='d-flex justify-content-between mt-2'>
				<button type='submit' className='btn btn-secondary'>
					Log in
				</button>
				<Link to='/register' className='btn btn-secondary mr-2'>
					Sign up:)
				</Link>
			</div>
		</form>
	)
}

export default Login
