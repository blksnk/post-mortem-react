import React, { Component } from 'react';
import Logo from '../global/Logo.js'
import btnStyle from '../buttons.module.css'
import style from './LogIn.module.css'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {SIGN_IN} from '../../actions/rootActions'
import axios from 'axios'

class LogIn extends Component {

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

	async handleSubmit() {
		const {email, password} = this.state
		if(!email && !password) return

		if(!this.props.loggedIn) {
			//query db
			try {
				const response = await axios.post('http://localhost:5000/sign-in', {
					email,
					password
				})

				const {jwt} = response.data

				//update store and localstorage
				this.props.signIn(jwt)

				//granted access, redirect
				this.setState({redirect: true})
			}
			catch(e) {
				console.log('error login', e)
			}
		}
		else {
			console.log('already logged in')
		}
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

const mapStateToProps = (state) => ({
	loggedIn: state.loggedIn,
	jwt: state.jwt
})

const mapDispatchToProps = (dispatch) => ({
	signIn: (jwt) => {
		dispatch(SIGN_IN(jwt))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)