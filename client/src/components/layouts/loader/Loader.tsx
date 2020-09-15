import React from 'react'
import './loader.css'

const Loader = () => (
	<div className='w-100 d-flex justify-content-center align-items-center'>
		<div className='lds-ring '>
			<div />
			<div />
			<div />
			<div />
		</div>
	</div>
)

export default Loader
