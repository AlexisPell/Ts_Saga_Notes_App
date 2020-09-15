import React from 'react'
import { connect } from 'react-redux'
import { logout } from './../../redux/actions/auth'

import { Link } from 'react-router-dom'

const Navbar = ({ logout }) => {
	return (
		<nav className='navbar navbar-expand-sm navbar-light bg-secondary'>
			<Link className='navbar-brand mt-2' to='/'>
				<h5>MyNotes</h5>
			</Link>

			<div className='navbar-collapse'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<Link to='/notes' className='nav-link ml-2 mt-2'>
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
				<button
					onClick={() => logout()}
					className='btn btn-sm btn-dark rounded-circle'
				>
					<i className='fas fa-sign-out-alt fa-sm'></i>
				</button>
			</div>
		</nav>
	)
}

export default connect(null, { logout })(Navbar)
