import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setAlert } from './../../redux/actions/alert'
import { register } from './../../redux/actions/auth'
import { Link, Redirect } from 'react-router-dom'

const SignUp = ({ setAlert, register, auth: { isAuthenticated, loading } }) => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	})
	const { name, email, password, password2 } = form

	const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

	const onSubmit = (e) => {
		e.preventDefault()
		if (name.length < 2) {
			setAlert('Name must be 2 chars at least :)', 'warning')
		} else if (password !== password2) {
			setAlert('Passwords do not match :)', 'danger')
		} else if (password.length < 6) {
			setAlert('Password should be 6 or more chars :)', 'danger')
		} else {
			register(form)
			setForm({
				name: '',
				email: '',
				password: '',
				password2: '',
			})
		}
	}

	if (isAuthenticated && !loading) {
		setAlert('Successfully logged in! :)', 'success')
		return <Redirect to='notes' />
	}

	return (
		<form className='my-3 w-75 mx-auto' onSubmit={onSubmit}>
			<div className='form-group'>
				<label>Name</label>
				<input
					className='form-control'
					value={name}
					name='name'
					onChange={onChange}
				/>
			</div>
			<div className='form-group'>
				<label>Email address</label>
				<input
					type='email'
					className='form-control'
					value={email}
					name='email'
					onChange={onChange}
					required
				/>
			</div>
			<div className='form-group'>
				<label>Password</label>
				<input
					type='password'
					className='form-control'
					value={password}
					name='password'
					onChange={onChange}
				/>
			</div>
			<div className='form-group'>
				<label>Confirm password</label>
				<input
					type='password'
					className='form-control'
					value={password2}
					name='password2'
					onChange={onChange}
				/>
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

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { setAlert, register })(SignUp)
