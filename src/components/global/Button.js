import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import style from './button.module.css'

export default class Button extends Component {
	render() {
		return (
			<Link className={style.main} to={this.props.link}>
				{this.props.inside}
			</Link>
		)
	}
}
