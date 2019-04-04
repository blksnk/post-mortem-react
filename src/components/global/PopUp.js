import React, { Component } from 'react'

import style from './PopUp.module.css'
import skeleton from '../../ressources/icons/skeleton.svg'
import cross from '../../ressources/icons/cross.svg'
import conversationBubble from '../../ressources/icons/conversationBubble.svg'

export default class PopUp extends Component {
  render () {
    return (
      <div className={style.wrapBackground}>
        <div className={style.cross}>
          <img src={cross} alt="cross"/>
        </div>

        <div className={style.wrapTextAndSkeleton}>
          <div className={style.globalBubble}>
            <div className={style.text}>
                {this.props.text}
            </div>
            <div className={style.addOnBubble}>
            <img src={conversationBubble} alt="bubble"/>
          </div>
          </div>

          <div className= {style.skeleton}>
             <img src={skeleton} alt="skeleton"/>
          </div>
        </div>

      </div>
      )
  }
}

