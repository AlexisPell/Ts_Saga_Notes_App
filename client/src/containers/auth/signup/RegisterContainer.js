import React from 'react'
import Register from './../../../components/auth/Register'

const RegisterContainer = () => (
	<Register onSubmit={console.log} onError={console.error} />
)

export default RegisterContainer
