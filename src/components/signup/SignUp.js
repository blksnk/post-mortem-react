import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {SIGN_IN} from '../../actions/rootActions'

import Logo from '../Logo.js'
import style from './SignUp.module.css'
import btnStyle from '../buttons.module.css'

const Input = ({ label, name, type, onChange }) => (
  <label className={style.inputLabel}>
  	{label}
  	<input name={name} type={type} onChange={onChange}/>
  </label>
)

class SignUp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			redirect: false,
			redirectLogin: false
		}

		// this.Input = this.Input.bind(this)
	}

	handleChange(e) {
		let {name, value} = e.target

		if (value === '') {
			value = null
		}

		this.setState( { [name]: value } )
	}

	async handleSubmit() {
		const {firstName, email, password, lastName} = this.state

		if (firstName !==null && email !==null && password !==null) {
			console.log('submit', email, password)

			//axios... only email and pwd bc backend isnt yet up to date
			if	(!this.props.loggedIn) {
				try {
					const response = await axios.post('http://localhost:5000/sign-up', {
						firstName,
						lastName,
						email,
						password,
					})
					const {jwt} = response.data
					console.log(jwt)
					//push in store
						this.props.signIn(jwt)
						//redirect
						this.setState({redirect: true})
					//
				}
				catch (e) {
					console.log(e)
					console.log('user in db')
				}
			}
			else {
				console.log('already signed in')
			}

		}
		else return
	}

	

	render() {

		console.log(this.state)

		const onChange = e => this.handleChange(e)

		return (
			<div className='signup-wrapper'>

				<Logo />

				<Input onChange={onChange} label="Prénom" type="text" name="firstName"/>
				<Input onChange={onChange} label="Nom de famille" type="text" name="lastName"/>
				<Input onChange={onChange} label="Email" type="email" name="email"/>
				<Input onChange={onChange} label="Mot de passe" type="password" name="password"/>

				<button className={btnStyle.bigBlue} onClick={() => this.handleSubmit()}>Créer un compte</button>
				<button className={btnStyle.smallGrey} onClick={() => this.setState({redirectLogin: true})}>Se connecter</button>

				{this.state.redirect ? <Redirect to='/signup/avatar'/> : null}
				{this.state.redirectLogin ? <Redirect to='/login'/> : null}
			</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)