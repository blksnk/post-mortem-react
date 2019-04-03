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
        image: joe
      },
      {
        title: "Cercueil en contreplaqué",
        image: joe2
      },
      {
        title: "Cercueil en bois recyclé",
        image: joe
      },
      {
        title: "Cercueil en plastique",
        image: joe2
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
  displayBox = (box, index) => {
    return (
      <div className={style.choiceItem}>
        <img className={style.choiceImage} src={box.image} />
        <div className={style.choiceTitle}>{box.title}</div>
      </div>
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
 
export default Obseques;