import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Landing from './components/layouts/Landing'
import Notes from './components/notes/Notes'

import LoginContainer from './containers/auth/login/LoginContainer'
import RegisterContainer from './containers/auth/signup/RegisterContainer'

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<div className='container'>
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/notes' component={Notes} />
					<Route exact path='/login' component={LoginContainer} />
					<Route exact path='/register' component={RegisterContainer} />
				</Switch>
			</div>
		</div>
	)
}

export default App
