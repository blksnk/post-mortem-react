import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import style from './navbar.module.css'
import homeIcon from '../ressources/icons/home.svg'
import infoIcon from '../ressources/icons/info.svg'

export default class Logo extends Component {
	render() {
		return (
      <div className={style.navbar}>
      	<NavLink to={this.props.leftUrl}>
      		{this.props.info ? 
        	<img src={infoIcon} alt="Icône d'information" />
        	:
        	<svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M13.6253 3.875C14.4307 3.06958 14.4307 1.76375 13.6253 0.958333C12.8199 0.152918 11.5141 0.152918 10.7087 0.958333L1.78831 9.87868C0.61674 11.0503 0.61674 12.9497 1.78831 14.1213L10.7087 23.0417C11.5141 23.8471 12.8199 23.8471 13.6253 23.0417C14.4307 22.2363 14.4307 20.9304 13.6253 20.125L5.50033 12L13.6253 3.875Z" fill="black"/>
					</svg>

      		}
      	</NavLink>

      	<NavLink to='/'>
      		<img src={homeIcon} alt="Icône maison" />
      	</NavLink>
      </div>
    )
  }
}  