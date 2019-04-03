import React, { Component } from 'react'
import style from './Obseques.module.css'
import joe from '../onBoarding/joe.png'
import joe2 from '../onBoarding/joe2.png'
import success from './success.svg'



const cards = [
  {
    title: "Les obsèques de tes rêves",
    subtitle: "",
    choices: [
      {
        title: "Inhumation",
        subtitle: "(Enterrer)",
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
  }
]

class Obseques extends Component {
    state = {
        index: 0,
        choices: {
          0: -1,
          1: -1,
          2: -1,
          3: -1,
          4: -1,
        }
    }

    handleNextCard = (event) => {
      const choice = this.state.choices[this.state.index];
      if(choice >= -1) {
        const nextIndex = cards[this.state.index].choices[choice].nextCard;
        this.setState({index: nextIndex});
      }
    }

    handleSaveChoice = (indexChoice) => {
      const choices = {...this.state.choices};
      choices[this.state.index] = indexChoice;
      this.setState({choices});
    }

    RenderBody = (props) => {
      switch(this.state.index) {
        case 0: return (
          <ChoiceList 
            card={cards[this.state.index]}
            callbackHandleSaveChoice={this.handleSaveChoice}
          />
        )
        case 1: return (
          <ChoiceList 
            card={cards[this.state.index]}
            callbackHandleSaveChoice={this.handleSaveChoice} 
          />
        )
        case 2: return (
          <ChoiceList 
            card={cards[this.state.index]}
            callbackHandleSaveChoice={this.handleSaveChoice} 
          />
        )
        case 3: return (
          <ChoiceList 
            card={cards[this.state.index]}
            callbackHandleSaveChoice={this.handleSaveChoice} 
          />
        )
      }
    }
    
    render() {
        return (
            <section className={style.wrapper}>
              <div className={style.title}>
                <h1>{cards[this.state.index].title}</h1>
              </div>
              <div className="body">
                <this.RenderBody/>
              </div>

              <div className={style.footer}>
              <button id={style.nextBtn} onClick={this.handleNextCard}>Suivant</button>
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
    this.props.callbackHandleSaveChoice(index);
  }

  displayChoice = (choice, index) => {
    return (
      <ChoiceItem 
        choice={choice} 
        callbackHandleClicked={this.handleClickedCallback} 
        isSelected={this.state.indexSelected === index} 
        key={index} 
        indexChoice={index} 
      />
    )
  }

  render() {
    return (
      <div className={style.choiceList}>
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
      <div className={style.choiceItem + (this.props.isSelected? ' ' + style.isClicked : '')} onClick={this.handleClicked}>
        {this.props.isSelected? <img className={style.isClickedIcon} src={success} />: null}
        {this.props.choice.image?  <img className={style.choiceImage} src={this.props.choice.image} /> : null}
        <div className={style.choiceTitle}>{this.props.choice.title}</div>
      </div>
    )
  }
}

export default Obseques;