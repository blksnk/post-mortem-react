import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class OrganesIntro extends Component {
	render() {
		return (
			<div>
				organes intro

				<Link to='/organes/choisir'>Maintenant a toi de choisir!</Link>
			</div>
		)
	}
}
