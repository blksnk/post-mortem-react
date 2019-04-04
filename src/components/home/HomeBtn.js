import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import style from './Home.module.css'

export default class HomeBtn extends Component {
	render() {
		return (
			<NavLink to={this.props.url} className={style.button}>

				<div className={style.top}>
					
					<img src={this.props.image} className={style.image} alt={this.props.alt}/>

					<div className={style.textWrapper}>
						<h4 className={style.title}>{this.props.title}</h4>

						{this.props.content ?
							<p>
								{this.props.content}
							</p>
							:
							<p>
								{this.props.emptyState}
							</p>
						}
					</div>

				</div>
				<span className={style.action}>
					{this.props.content ? 
						'Modifier'
						:
						'Commencer'
					}
				</span>
			</NavLink>
		);
	}
}
