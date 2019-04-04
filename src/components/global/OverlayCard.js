import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import style from './OverlayCard.module.css'
import bntStyle from '../buttons.module.css'

export default class OverlayCard extends Component {
	render() {
		return (
			<div className={style.wrapper}>

				<div className={style.card}>
					<img className={style.image} src={this.props.image} alt="overlay card illustration"/>

					<h2 className={style.title}>{this.props.title}</h2>

					<p className={style.subtitle}>{this.props.subtitle}</p>

					<Link className={`${bntStyle.bigBlue} ${style.btn}`} to={this.props.url}>{this.props.button}</Link>

					{this.props.homeLink ? 
						<Link to='/'>Aller à l'accueil</Link>
						: null
					}
				</div>
			</div>
		);
	}
}
