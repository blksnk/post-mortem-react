import React, { Component } from 'react'
import style from './Obseques.module.css'
import ChoiceItem from './ChoiceItem'

class ChoiceList extends Component {
  state = {
    indexSelected: -1,
  }  

  componentDidMount () {
    if(this.props.inputs !== null) {
      this.handleClickedCallback(this.props.inputs.index, this.props.inputs.value);
    }
  }

  handleClickedCallback = (index, input) => {
    this.setState({ indexSelected: index });
    this.props.callbackHandleSaveInput(index, { index: index, value: input});
  }

  displayChoice = (choice, index) => {
    return (
      <ChoiceItem 
        choice={choice} 
        callbackHandleClicked={this.handleClickedCallback} 
        isSelected={this.state.indexSelected === index} 
        key={index} 
        indexChoice={index} 
        itemStyle={this.props.card.listStyle === 'row' ? 'small' : 'large'}
        itemColor={this.props.card.borderColor}
        itemBackground={this.props.card.backgroundColor}
      />
    )
  }

  render() {
    return (
      <div className={style.choiceList + ' ' + (this.props.card.listStyle === 'row' ? style.choiceListRow : style.choiceListColumn )}>
        {this.props.card.choices.map(this.displayChoice)}
      </div>
    )
  }
}

export default ChoiceList;