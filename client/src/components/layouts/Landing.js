import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => (
	<div className='my-5'>
		<h2 className='text-muted mx-auto'>Create and save your personal notes</h2>
		<div className='my-3 d-flex justify-content-center'>
			<Link to='/login' className='btn btn-secondary align-self-center mx-1'>
				Login
			</Link>
			<Link to='/register' className='btn btn-secondary mx-1'>
				Sign Up
			</Link>
		</div>
	</div>
)

export default Landing
