import React, { Component } from 'react'

import style from './navbar.module.css'
import homeIcon from '../ressources/icons/home.svg'
import infoIcon from '../ressources/icons/info.svg'

export default class Logo extends Component {
	render() {
		return (
      <div className={style.navbar}>
        <img src={infoIcon} alt="Icône d'information" />
        <img src={homeIcon} alt="Icône maison" />
      </div>
    )
  }
}  