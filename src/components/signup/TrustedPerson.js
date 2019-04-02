import React, { Component } from 'react'

import UploadProfilePic from '../UploadProfilePic.js'

export default class TrustedPerson extends Component {
	render() {
		return (
			<div className='trusted-person'>
				<h1>Mon contact de confiance</h1>

				<UploadProfilePic/>

			</div>
		);
	}
}
