import React, { Component } from 'react'
import { connect } from 'react-redux'
import {SET_FUNERAL_INPUTS} from '../../actions/rootActions'
import style from './Obseques.module.css'
import Navbar from '../global/Navbar'
import joePink from './icons/joePink.svg'
import joeYellow from './icons/joeYellow.svg'
import joeGreen from './icons/joeGreen.svg'
import joeRed from './icons/joeRed.svg'
import joeBlue from './icons/joeBlue.svg'
import joeGrey from './icons/joeGrey.svg'
import coffin1 from './icons/coffin1.svg'
import coffin2 from './icons/coffin2.svg'
import coffin3 from './icons/coffin3.svg'
import editIcon from './icons/editIcon.svg'

const cards = [
  {
    title: "Les obsèques de tes rêves",
    key: "funeralType",
    listStyle: "column",
    borderColor: style.pinkBorder,
    backgroundColor: style.pinkBackground,
    image: joePink,
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
    title: "Jusqu'au bout tu seras maître de tes choix",
    key: "coffinType",
    listStyle: "row",
    borderColor: style.greenBorder,
    backgroundColor: style.greenBackground,
    image: joeGreen,
    choices: [
      {
        title: "Cercueil en bois de chêne",
        image: coffin1,
        nextCard: 2,
      },
      {
        title: "Cercueil bois recyclable",
        image: coffin2,
        nextCard: 2,
      },
      {
        title: "Cercueil noir",
        image: coffin3,
        nextCard: 2,
      },
    ]
  },
  {
    title: "Jusqu'au bout tu seras maître de tes choix",
    key: "tombType",
    listStyle: "row",
    borderColor: style.yellowBorder,
    backgroundColor: style.yellowBackground,
    image: joeYellow,
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
    title: "Jusqu'au bout tu seras maître de tes choix",
    key: "urnType",
    listStyle: "row",
    borderColor: style.redBorder,
    backgroundColor: style.redBackground,
    image: joeRed,
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
    title: "Choisis tes musiques préférées pour une meilleure cérémonie (3 choix possibles)",
    key: "musicList",
    image: joeBlue,
    inputs: [
      {
        label: "Musique 1",
        placeholder: "",
      },
      {
        label: "Musique 2",
        placeholder: "",
      },
      {
        label: "Musique 3",
        placeholder: "",
      },
      
    ]
  },
  {
    title: "Choisis tes lieux rêvés où tu aimerais finir tes jours (3 choix possibles)",
    key: "locationList",
    image: joeGrey,
    inputs: [
      {
        label: "",
        placeholder: "",
      },
      {
        label: "",
        placeholder: "",
      },
      {
        label: "",
        placeholder: "",
      },
      
    ]
  },
  {
    title: "Les obsèques de tes rêves",
  }
]

class Obseques extends Component {
    state = {
        index: 6,
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
            card={cards[this.state.index]}
            callbackHandleSaveInput={this.handleSaveInput}
            key={4}
          />
        )
        case 5: return (
          <InputList 
            card={cards[this.state.index]}
            callbackHandleSaveInput={this.handleSaveInput}
            key={5}
          />
        )
<<<<<<< HEAD
        case 6: return (
          <SummaryList 
            callbackHandleSaveInput={this.handleSaveInput}
            key={6}
          />
        )
        default: 
          return null;
=======
        default: return
>>>>>>> 8895fed72cb982d1ef08aff2cefaa9331f00b882
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
                <div className={style.cardImage}><img src={cards[this.state.index].image} /></div>
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

  displayInput = (input, index) => {
      return (
        <label className={style.inputLabel}>{input.label}
            <input name={'input-' + index}  placeholder={input.placeholder} type="text" onChange={(e) => this.handleChange(e)}/>
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

class SummaryList extends Component {
  render () {
    return (
      <div className={style.summaryList}>
        <div className={style.funeralTypeBox + ' ' + style.summaryBox}>
          <div className={style.summaryBoxHeader}>
            <div>Inhumation</div>
            <div className={style.editIcon}><img src={editIcon} alt="Icône de modification" /></div>
          </div>
        </div>
        <div className={style.funeralTypeDetailsBox}></div>
        <div className={style.musicBox + ' ' + style.summaryBox}>
          <div className={style.summaryBoxHeader}>
            <div>Musique</div>
            <div className={style.editIcon}><img src={editIcon} alt="Icône de modification" /></div>
          </div>
        </div>
        <div className={style.locationBox + ' ' + style.summaryBox}>
          <div className={style.summaryBoxHeader}>
            <div>Lieux</div>
            <div className={style.editIcon}><img src={editIcon} alt="Icône de modification" /></div>
          </div>
        </div>
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