import React, { Component, useState } from 'react';
import Logo from '../Logo'
import defaultImage from '../../ressources/icons/logo PM.png'

const avatars = new Array(6).fill(defaultImage)

const ChooseAvatar = () => {
	const [ state, setState ] = useState(0)
	return (
		<div className='choose-avatar'>
			<Logo/>

			<h2>Choisis un avatar pour commencer.</h2>
				
			<CurrentChosen image={avatars[state]} />

			<div className='avatar-wrapper'>
				{avatars.map((oneAvatar, index) => (
					<div className='avatar-container' key={index} onClick={() => setState(index)}>
						<img src={oneAvatar} alt="avatar"/>
					</div>
					))}
			</div>

			<button onClick={validateAvatar(state)}>Valider</button>
		</div>
	)
}

const validateAvatar = (index) => {
	console.log(index)
}

export default ChooseAvatar

export class CurrentChosen extends Component {

	render() {
		return(
		   <img src={this.props.image || defaultImage} alt="chosen avatar"/>
		)
	}
}