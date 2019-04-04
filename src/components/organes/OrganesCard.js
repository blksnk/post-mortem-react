import React, { Component } from 'react';

import style from './organes.module.css'
import '../global/active.css'

export default class OrganesCard extends Component {

	constructor(props) {
		super(props)
		this.state = {
			active: false,
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextProps.active !== this.props.active) {
			this.setState({active: !this.props.active})
		}
	}

	toggleActive() {

	}

	render() {
		return (
			<div className={`${style.card} ${this.state.active ? 'organeActive' : ''}`}>
				<img className={style.itemImage} src={this.props.image} alt={this.props.name}/>
				<span className={style.itemLabel}>
					{this.props.name}
				</span>
			</div>
		);
	}
}
