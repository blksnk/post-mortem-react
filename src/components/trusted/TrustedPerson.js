import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import style from './TrustedPerson.module.css'
import btnStyle from '../global/buttons.module.css'
import Navbar from '../global/Navbar'

import OverlayCard from '../global/OverlayCard'
import UploadProfilePic from '../global/UploadProfilePic.js'
import {addTrusted, uploadImage, storeTrusted, getStoredTrusted, updateStoredTrustedPending} from '../../helpers'
import {connect} from 'react-redux'
import {ADD_TRUSTED, SET_TRUSTED_PENDING} from '../../actions/rootActions'

class TrustedPerson extends Component {
	constructor(props) {
		super(props)
		this.state = {
			redirect: false,
			confirmation: false,
			pending: localStorage.getItem('trustedContactPending'),
			found: false,
		}
	}

	handleChange(e) {
		const {name, value} = e.target
		this.setState( { [name]: value } )
	}

	updateLocalStorage() {

	}

	checkLocalStorage() {
		const local = getStoredTrusted()
		for (let key in local) {
			this.setState( { [key]: local[key] } )
		}	
		this.setState({found: true})
	}

	async handleSubmit() {
		const {email, firstName, lastName} = this.state
		if(firstName && lastName && email) {
			//submit to db
			try {
				const url = await uploadImage(this.props.profilePicPreviewBase64)
				console.log(url)
				const data = await addTrusted({email, firstName, lastName, avatar: url})
				console.log(data)
				//add status pending with name and email
				this.props.registerTrusted(firstName, lastName, email, data.avatar)
				this.props.setPending()
				updateStoredTrustedPending(firstName, lastName, email, data.avatar)
				updateStoredTrustedPending(true)
				this.setState( { redirect: true } )
			}
			catch(e) {
				console.log(e)
			}

			//then redirect to home

			// this.setState({confirmation: true})
		}
	}

	handleSkip() {
		this.setState( { redirect: true } )
	}

	createAddUI() {
		return (
					<div>

						<Navbar leftUrl='/trusted'/>

						<h2>Mon contact de confiance</h2>

						<UploadProfilePic/>


						<label className={style.inputLabel}>
							Prénom
							<input name='firstName' onChange={(e) => this.handleChange(e)} type="text"/>
						</label>

						<label className={style.inputLabel}>
							Nom de famille
							<input name='lastName' onChange={(e) => this.handleChange(e)} type="text"/>
						</label>

						<label className={style.inputLabel}>
							Email
							<input name='email' onChange={(e) => this.handleChange(e)} type="email"/>
						</label>


						<button className={btnStyle.bigBlue} onClick={e => this.handleSubmit()}>Valider</button>

						<button className={btnStyle.smallGrey} onClick={e => this.handleSkip()}>Décider plus tard</button>

						{this.state.redirect ? <Redirect exact to='/' /> : null}

						{this.state.confirmation ? <OverlayCard 
							title='Contact ajouté!' 
							subtitle={`${this.state.name} a été notifié et devra accepter d'être ton contact de confiance.`} 
							button={`Aller à l'accueil`}
							url='/'
							image='data:image/jpeg;base64,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' 
							/> : null}
					</div>  
		)
	}

	createPendingUI() {
		return (
			<div>
					<Navbar leftUrl='/trusted'/>
				<h2>Mon contact de confiance</h2>


				<h4>pending</h4>
			</div>
		)
	}

	createInfoUI() {
		return (
		  <div>
					<Navbar leftUrl='/trusted'/>
				<h2>Mon contact de confiance</h2>

		  	
		  </div>
		)
	}

	render() {
		console.log(this.props.pending)
		if(this.state.found) {
			return (
			  <div>
			  	
			  </div>
			)
		}
		else return (
			<div className={style.trustedPerson}>

				{ this.state.pending ?
					this.createPendingUI()
					:
					this.createAddUI()
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	pending: state.trustedContact.pending,
	personalInfo: state.trustedContact.info,
	profilePicPreviewBase64: state.profilePicPreviewBase64,
})

const mapDispatchToProps = (dispatch) => ({
	setPending: () => dispatch(SET_TRUSTED_PENDING()),
	registerTrusted: () => dispatch(ADD_TRUSTED()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrustedPerson)