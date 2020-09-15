import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const Landing = ({ auth: { isAuthenticated, loading } }) => {
	if (isAuthenticated && !loading) {
		return <Redirect to='notes' />
	}

	return (
		<div className='my-5'>
			<h2 className='text-info mx-auto'>Create and save your personal notes</h2>
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
}

const mapStateToProps = (state) => ({
	auth: state.auth,
})

export default connect(mapStateToProps, {})(Landing)
