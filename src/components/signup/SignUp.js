import React, { Component } from 'react'

import Logo from '../Logo.js'

export default class SignUp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			password: null
		}
	}

	handleChange(e) {
		let {name, value} = e.target

		if (value === '') {
			value = null
		}

		this.setState( { [name]: value } )
	}

	handleSubmit() {
		const {firstName, lastName, email, password} = this.state

		if (firstName !==null && lastName !==null && email !==null && password !==null) {
			console.log('submit')

			//axios...
			//envoi db
		}
		else return
	}

	render() {

		console.log(this.state)
		return (
			<div className='signup-wrapper'>

				<Logo />

				<label>Prénom
					<input name='firstName' type="text" onChange={(e) => this.handleChange(e)}/>
				</label>

				<label>Nom de famille
					<input name='lastName' type="text" onChange={(e) => this.handleChange(e)}/>
				</label>

				<label>Email
					<input name='email' type="email" onChange={(e) => this.handleChange(e)}/>
				</label>

				<label>Mot de Passe
					<input name='password' type="password" onChange={(e) => this.handleChange(e)}/>
				</label>

				<button onClick={() => this.handleSubmit()}>Valider</button>

			</div>
		);
	}
}
