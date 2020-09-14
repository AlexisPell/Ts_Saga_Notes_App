import React from 'react'
import Login from './../../../components/auth/Login'

const LoginContainer = () => (
	<Login onSubmit={console.log} onError={console.error} />
)

export default LoginContainer
