import React, { Component } from 'react'
import style from './Obseques.module.css'
import joe from '../onBoarding/joe.png'
import joe2 from '../onBoarding/joe2.png'


const cards = [
  {
    title: "Les obsèques de tes rêves",
    subtitle: "",
  },
  {
    title: "Cercueil de tes rêves ?",
    subtitle: "",
    boxes: [
      {
        title: "Cercueil en bois de chêne",
        image: joe,
        index: 0,
      },
      {
        title: "Cercueil en contreplaqué",
        image: joe2,
        index: 1,
      },
      {
        title: "Cercueil en bois recyclé",
        image: joe,
        index: 2,
      },
      {
        title: "Cercueil en plastique",
        image: joe2,
        index: 3,
      }
    ]
  }
]

class Obseques extends Component {
    state = {  
        index: 1,
    }

    render() {
        return (  
            <section className={style.wrapper}>
              <div className={style.title}>
                <h1>{cards[this.state.index].title}</h1>
              </div>
              <div className="body">
                {{
                  0: (
                    <ObsequesHome />
                  ),
                  1: (
                    <ObsequesCercueil index={this.state.index}/>
                  ),
                }[this.state.index]}
              </div>
              <div className={style.footer}>
                <button id={style.skipBtn}>Passer</button>
                <button id={style.nextBtn}>Suivant</button>
              </div>
            </section>
        );
    }
}

class ObsequesHome extends Component {
  render() {
    return (
      <div>Obseques Home</div>
    )
  }
}

class ObsequesCercueil extends Component {
  state = {
    indexActive: -1,
  }  

  handleClickedCallback = (index) => {
    this.setState({ indexActive: index});
  }

  displayBox = (box, index) => {
    return (
      <ObsequeChoiceBox box={box} callbackHandleClicked={this.handleClickedCallback} indexActive={this.state.indexActive} key={index} />
    )
  }

  render() {
    const card = cards[this.props.index];

    return (
      <div className={style.choiceList}>
        {card.boxes.map(this.displayBox)}
      </div>
    )
  }
}

class ObsequeChoiceBox extends Component {
  handleClicked = (event) => {
    this.props.callbackHandleClicked(this.props.box.index);
  }

  render () {
    const isActive = (this.props.box.index === this.props.indexActive);

    return (
      <div className={style.choiceItem + (isActive? ' ' + style.isClicked : '')} onClick={this.handleClicked}>
        <img className={style.choiceImage} src={this.props.box.image} />
        <div className={style.choiceTitle}>{this.props.box.title}</div>
      </div>
    )
  }
}
 
export default Obseques;