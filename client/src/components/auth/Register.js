import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
	return (
		<form className='my-5 w-75 mx-auto'>
			<div className='form-group'>
				<label>Name</label>
				<input className='form-control' required />
			</div>
			<div className='form-group'>
				<label>Email address</label>
				<input type='email' className='form-control' required />
			</div>
			<div className='form-group'>
				<label>Password</label>
				<input type='password' className='form-control' required />
			</div>
			<div className='form-group'>
				<label>Confirm password</label>
				<input type='password' className='form-control' required />
			</div>
			<small className='form-text text-muted mx-right text-right'>
				Already got an account? Log in here
			</small>
			<div className='d-flex justify-content-between mt-2'>
				<button type='submit' className='btn btn-secondary'>
					Sign Up
				</button>
				<Link to='/login' className='btn btn-secondary mr-2'>
					Log in:)
				</Link>
			</div>
		</form>
	)
}

export default SignUp
