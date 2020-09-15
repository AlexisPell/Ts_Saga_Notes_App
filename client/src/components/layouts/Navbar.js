import React from 'react'
import { connect } from 'react-redux'
import { logout } from './../../redux/actions/auth'
import { Link } from 'react-router-dom'
import { setAlert } from './../../redux/actions/alert'

import Loader from './loader/Loader'

const Navbar = ({ logout, setAlert, auth: { isAuthenticated, loading } }) => {
	const onClick = () => {
		logout()
		setAlert('See you soon! :p', 'info')
	}

	const homeLinks = (
		<div className='navbar d-flex justify-content-end w-100'>
			<ul className='navbar-nav mr-3'>
				<li className='nav-item active'>
					<Link to='/notes' className='nav-link ml-2 mt-2 text-info'>
						<h5>Notes</h5>
					</Link>
				</li>
			</ul>
			<form className='form-inline my-2 my-lg-0'>
				<input
					className='form-control mr-sm-2'
					type='search'
					placeholder='Find by note title'
					aria-label='Search'
					name='text'
				/>
			</form>
			<button onClick={onClick} className='btn btn-sm btn-dark rounded-circle'>
				<i className='fas fa-sign-out-alt fa-sm'></i>
			</button>
		</div>
	)

	const guestLinks = (
		<ul className='navbar-nav d-flex justify-content-end w-100'>
			<li className='nav-item active'>
				<Link to='/login' className='nav-link ml-2 mt-2 text-info'>
					<h5>Login</h5>
				</Link>
			</li>
			<li className='nav-item active'>
				<Link to='/register' className='nav-link ml-2 mt-2 text-info'>
					<h5>Sign Up</h5>
				</Link>
			</li>
		</ul>
	)

	return (
		<nav className='navbar navbar-expand-sm navbar-light bg-secondary'>
			<Link className='navbar-brand mt-2' to='/'>
				<h4 className='text-info'>MyNotes</h4>
			</Link>
			{loading && <Loader />}
			{!loading && <>{isAuthenticated ? homeLinks : guestLinks}</>}
		</nav>
	)
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, { logout, setAlert })(Navbar)
