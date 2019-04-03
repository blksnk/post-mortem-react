import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import style from './TrustedPerson.module.css'
import btnStyle from '../buttons.module.css'

import UploadProfilePic from '../UploadProfilePic.js'

export default class TrustedPerson extends Component {
	constructor(props) {
		super(props)
		this.state = {
			redirect: false
		}
	}

	handleChange(e) {
		const {name, value} = e.target
		this.setState( { [name]: value } )
	}

	handleSubmit() {
		const {email, name} = this.state
		if(name && email) {
			//submit to db

			//then redirect to home

			this.setState({redirect: true})
		}
	}

	handleSkip() {
		this.setState( { redirect: true } )
	}

	render() {
		return (
			<div className={style.trustedPerson}>
				<h2>Mon contact de confiance</h2>

				<UploadProfilePic/>


				<label className={style.inputLabel}>
					Prénom
					<input name='name' onChange={(e) => this.handleChange(e)} type="text"/>
				</label>

				<label className={style.inputLabel}>
					Email
					<input name='email' onChange={(e) => this.handleChange(e)} type="email"/>
				</label>

				<button className={btnStyle.bigBlue} onClick={e => this.handleSubmit()}>Valider</button>

				<button className={btnStyle.smallGrey} onClick={e => this.handleSkip()}>Décider plus tard</button>

				{this.state.redirect ? <Redirect exact to='/' /> : null}

			</div>
		);
	}
}
