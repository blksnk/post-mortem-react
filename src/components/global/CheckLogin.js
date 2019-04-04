import React, { Component } from 'react'
import {getJwt} from '../../helpers'
import {Redirect} from 'react-router-dom'

export default class CheckLogin extends Component {

	constructor(props) {
		super(props)
		this.state = {
			redirect: false,
		}
	}

	componentDidMount() {
		if(window.location.pathname === '/' && !getJwt()) {
			this.setState({redirect: true})
		}
	}

	render() {
		return (
			<div>
				{this.state.redirect ? 
					<Redirect to='/login'/> : null
				} 
			</div>
		);
	}
}
