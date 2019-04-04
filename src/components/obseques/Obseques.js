import React, { Component } from 'react'
import { connect } from 'react-redux'
import {SET_FUNERAL_INPUTS} from '../../actions/rootActions'
import style from './Obseques.module.css'
import Navbar from '../Navbar'
import joe from '../onBoarding/joe.png'
import joe2 from '../onBoarding/joe2.png'
import success from './success.svg'

const cards = [
  {
    title: "Les obsèques de tes rêves",
    subtitle: "",
    key: "funeralType",
    listStyle: "column",
    borderColor: style.pinkBorder,
    backgroundColor: style.pinkBackground,
    choices: [
      {
        title: "Inhumation",
        subtitle: "(6 pieds sous terre)",
        image: null,
        nextCard: 1,
      },
      {
        title: "Crémation",
        subtitle: "(Partir en fumée)",
        image: null,
        nextCard: 3,
      },
      {
        title: "Don à la science",
        subtitle: "(Comme Dr Maboul)",
        image: null,
        nextCard: 4,
      },
    ]
  },
  {
    title: "Cercueil de tes rêves ?",
    subtitle: "",
    key: "coffinType",
    listStyle: "row",
    borderColor: style.greenBorder,
    backgroundColor: style.greenBackground,
    choices: [
      {
        title: "Cercueil en bois de chêne",
        image: joe,
        nextCard: 2,
      },
      {
        title: "Cercueil en contreplaqué",
        image: joe2,
        nextCard: 2,
      },
      {
        title: "Cercueil en bois recyclé",
        image: joe,
        nextCard: 2,
      },
      {
        title: "Cercueil en plastique",
        image: joe2,
        nextCard: 2,
      }
    ]
  },
  {
    title: "La tombe de tes rêves ?",
    key: "tombType",
    listStyle: "row",
    borderColor: style.yellowBorder,
    backgroundColor: style.yellowBackground,
    choices: [
      {
        title: "Caveau",
        subtitle: "(pour toi et toute ta famille)",
        nextCard: 4
      },
      {
        title: "Tombe pleine terre",
        subtitle: "(1 personne max)",
        nextCard: 4
      },
      {
        title: "L'enfeu",
        subtitle: "(spécial pour les sudistes)",
        nextCard: 4
      }
    ]
  },
  {
    title: "Urne tes rêves ?",
    key: "urnType",
    listStyle: "row",
    borderColor: style.redBorder,
    backgroundColor: style.redBackground,
    choices: [
      {
        title: "Urne en composite",
        subtitle: "(pour toi et toute ta famille)",
        nextCard: 4,
      },
      {
        title: "Urne recyclable",
        subtitle: "(pour toi et toute ta famille)",
        nextCard: 4,
      }
    ]
  },
  {
    title: "Choisis les musiques pour une meilleure cérémonie",
    subtitle: "(3 choix possibles)",
    key: "musicList",
  },
  {
    title: "Tes lieux rêvés pour tes obsèques",
    subtitle: "(3 choix possibles)",
    key: "locationList",
  },
  {
    title: "Les obsèques de tes rêves",
  }
]

class Obseques extends Component {
    state = {
        index: 0,
        funeralInputs: {},
        currentInput: null,
    }

    handleNextCard = (event) => {
      const card = cards[this.state.index];
      let nextIndex = 0;
      if(this.state.currentInput !== null) {
        if('choices' in card) {
          nextIndex = card.choices[this.state.currentInput].nextCard;
        } else {
          nextIndex = this.state.index + 1;
        }
        this.setState({index: nextIndex, currentInput: null});
        let funeralInputs = this.state.funeralInputs;
        funeralInputs[card.key] = this.state.currentInput;
        this.props.setFuneralInputs({funeralInputs: funeralInputs});
      }
    }

    handleSaveInput = (input) => {
      this.setState({currentInput: input});
    }

    RenderBody = (props) => {
      switch(this.state.index) {
        case 0: return (
          <ChoiceList 
            card={cards[this.state.index]}
            callbackHandleSaveInput={this.handleSaveInput}
            key={0}
          />
        )
        case 1: return (
          <ChoiceList 
            card={cards[this.state.index]}
            callbackHandleSaveInput={this.handleSaveInput}
            key={1}
          />
        )
        case 2: return (
          <ChoiceList 
            card={cards[this.state.index]}
            callbackHandleSaveInput={this.handleSaveInput} 
            key={2}
          />
        )
        case 3: return (
          <ChoiceList 
            card={cards[this.state.index]}
            callbackHandleSaveInput={this.handleSaveInput}
            key={3}
          />
        )
        case 4: return (
          <InputList 
            callbackHandleSaveInput={this.handleSaveInput}
            key={4}
          />
        )
        case 5: return (
          <InputList 
            callbackHandleSaveInput={this.handleSaveInput}
            key={5}
          />
        )
        default: 
          return null;
      }
    }
    
    render() {
        return (
            <section className={style.wrapper}>
              <Navbar />
              <div className={style.cardWrapper}>
                <div className={style.title}>
                  <div>Les obsèques de tes rêves</div>
                </div>
                <div className={style.cardTitle}>{cards[this.state.index].title}</div>
                {cards[this.state.index].subtitle? <div className={style.cardSubtitle}>{cards[this.state.index].subtitle}</div> : null}
                <div className="body">
                  <this.RenderBody/>
                </div>

                <div className={style.footer}>
                <button id={style.nextBtn} onClick={this.handleNextCard}>Valider</button>
                </div>
              </div>
            </section>
        );
    }
}

class ChoiceList extends Component {
  state = {
    indexSelected: -1,
  }  

  handleClickedCallback = (index) => {
    this.setState({ indexSelected: index });
    this.props.callbackHandleSaveInput(index);
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

class ChoiceItem extends Component {
  handleClicked = (event) => {
    if(this.props.isSelected) {
      this.props.callbackHandleClicked(-1);
    } else {
      this.props.callbackHandleClicked(this.props.indexChoice);
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

class InputList extends Component {
  state = {
    inputList: {},
  }

  handleChange(e) {
		let {name, value} = e.target

		if (value === '') {
			value = null
		}

    let inputList = this.state.inputList;
    inputList[name] = value;
    this.setState( { inputList: inputList } );
    this.props.callbackHandleSaveInput(this.state.inputList);
  }

  displayInput = (index) => {
      return (
        <label>{index}.
            <input name={'input-' + index}  type="text" onChange={(e) => this.handleChange(e)}/>
        </label>
      )
  }

  render () {
    return (
      <div className={style.inputList}>
        {this.displayInput(0)}
        {this.displayInput(1)}
        {this.displayInput(2)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	funeralInputs: state.funeralInputs,
})

const mapDispatchToProps = (dispatch) => {
	return {
		setFuneralInputs: (funeralInputs) => {
			dispatch(SET_FUNERAL_INPUTS(funeralInputs))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Obseques);