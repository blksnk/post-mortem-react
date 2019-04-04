import React, { Component } from 'react'
import style from './Obseques.module.css'

class InputList extends Component {
  state = {
    inputList: (this.props.inputs === null) ? {} : this.props.inputs,
  }

  componentDidMount () {
    if(this.props.inputs !== null) {
      this.handleInputInit(this.props.inputs);
    }
  }

  handleInputInit(inputs) {
    this.setState( { inputList: inputs } );
    this.props.callbackHandleSaveInput(inputs, inputs);
  }

  handleChange(e) {
		let {name, value} = e.target

		if (value === '') {
			value = null
    }
    
    let inputList = this.state.inputList;
    inputList[name] = value;
    this.setState( { inputList: inputList } );
    this.props.callbackHandleSaveInput(this.state.inputList, this.state.inputList);
  }

  displayInput = (input, index) => {
      const inputKey = 'input-' + index;
      return (
        <label className={style.inputLabel} key={index}>{input.label}
            <input name={inputKey} value={(this.props.inputs === null) ? null : this.props.inputs[inputKey]} placeholder={input.placeholder} type="text" onChange={(e) => this.handleChange(e)}/>
        </label>
      )
  }

  render () {
    return (
      <div className={style.inputList}>
        {this.props.card.inputs.map(this.displayInput)}
      </div>
    )
  }
}

export default InputList;