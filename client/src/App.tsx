import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import store from './redux/store'
import { keepLogged } from './redux/actions/auth'

import Navbar from './components/layouts/Navbar'
import Alert from './components/layouts/Alert'
import Landing from './components/layouts/Landing'
import Notes from './components/notes/Notes'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

const App = () => {
	useEffect(() => {
		store.dispatch(keepLogged())
	}, [])

	return (
		<div className='app'>
			<Navbar />
			<div className='container'>
				<Alert />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/notes' component={Notes} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
				</Switch>
			</div>
		</div>
	)
}

export default App
