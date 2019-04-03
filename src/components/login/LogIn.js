import React, { Component } from 'react';
import Logo from '../Logo.js'
import btnStyle from '../buttons.module.css'
import style from './LogIn.module.css'
import {Redirect} from 'react-router-dom'


export default class LogIn extends Component {

	constructor(props) {
		super(props)

		this.state = {
			email: null,
			password: null,
			redirect: false,
			redirectSignup: false
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
		const {email, password} = this.state
		if(!email && !password) return

		//query db

		//add jwt to localstorage

		//update store

		//granted access, redirect
		this.setState({redirect: true})
	}

	render() {
		return (
			<section>

				<Logo/>

				<label className={style.inputLabel}>Email
					<input name='email' type="email" onChange={(e) => this.handleChange(e)}/>
				</label>

				<label className={style.inputLabel}>Mot de Passe
					<input name='password' type="password" onChange={(e) => this.handleChange(e)}/>
				</label>

				<button className={btnStyle.bigBlue} onClick={() => this.handleSubmit()}>Se connecter</button>
				<button className={btnStyle.smallGrey} onClick={() => this.setState({redirectSignup: true})}>ou Créer un compte</button>

				{this.state.redirect ? <Redirect to='/'/> : null}
				{this.state.redirectSignup ? <Redirect to='/signup'/> : null}


			</section>
		);
	}
}
