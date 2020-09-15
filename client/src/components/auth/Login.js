import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from './../../redux/actions/auth'
import { setAlert } from './../../redux/actions/alert'

import { Link, Redirect } from 'react-router-dom'

const Login = ({ login, setAlert, auth: { isAuthenticated, loading } }) => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	})
	const { email, password } = form

	const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

	const onSubmit = (e) => {
		e.preventDefault()
		if (password.length < 6) {
			setAlert('Password is 6 or more chars :)', 'danger')
		} else {
			login(form)
			setForm({
				email: '',
				password: '',
			})
		}
	}

	if (isAuthenticated && !loading) {
		setAlert('Successfully logged in! :)', 'success')
		return <Redirect to='notes' />
	}

	return (
		<form className='my-5 w-75 mx-auto' onSubmit={onSubmit}>
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
					required
				/>
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

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { login, setAlert })(Login)
