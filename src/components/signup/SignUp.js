import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import Logo from '../Logo.js'
import style from './SignUp.module.css'
import btnStyle from '../buttons.module.css'

export default class SignUp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: null,
			email: null,
			password: null,
			redirect: false,
			redirectLogin: false
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
		const {firstName, email, password} = this.state

		if (firstName !==null && email !==null && password !==null) {
			console.log('submit')

			//axios...
			//envoi db

			//redirect
			this.setState({redirect: true})
		}
		else return
	}

	render() {

		console.log(this.state)
		return (
			<div className='signup-wrapper'>

				<Logo />

				<label className={style.inputLabel}>Prénom
					<input name='firstName' type="text" onChange={(e) => this.handleChange(e)}/>
				</label>

				<label className={style.inputLabel}>Email
					<input name='email' type="email" onChange={(e) => this.handleChange(e)}/>
				</label>

				<label className={style.inputLabel}>Mot de Passe
					<input name='password' type="password" onChange={(e) => this.handleChange(e)}/>
				</label>

				<button className={btnStyle.bigBlue} onClick={() => this.handleSubmit()}>Créer un compte</button>
				<button className={btnStyle.smallGrey} onClick={() => this.setState({redirectLogin: true})}>Se connecter</button>

				{this.state.redirect ? <Redirect to='/signup/avatar'/> : null}
				{this.state.redirectLogin ? <Redirect to='/login'/> : null}
			</div>
		);
	}
}
