import React, { Component } from 'react'
import style from './Obseques.module.css'

class ChoiceItem extends Component {
  handleClicked = (event) => {
    if(this.props.isSelected) {
      this.props.callbackHandleClicked(-1, this.props.choice.title);
    } else {
      this.props.callbackHandleClicked(this.props.indexChoice, this.props.choice.title);
    }
  }

  render () {
    return (
      <div className={style.choiceItem + ' ' + this.props.itemColor + (this.props.isSelected? ' ' + this.props.itemBackground : '') + ' ' + (this.props.itemStyle === 'small' ? style.choiceItemSmall : style.choiceItemLarge)} onClick={this.handleClicked}>
        {this.props.choice.image?  <img className={style.choiceImage} src={this.props.choice.image} /> : null}
        <div className={style.choiceTitle}>{this.props.choice.title}</div>
        {this.props.choice.subtitle? <div className={style.choiceSubtitle}>{this.props.choice.subtitle}</div> : null}
      </div>
    )
  }
}

export default ChoiceItem;