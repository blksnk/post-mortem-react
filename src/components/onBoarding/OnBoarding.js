import React, { Component } from 'react'
import joe from './joe.png'
import joe2 from './joe2.png'

import style from './OnBoarding.module.css'

const cards = [
    {
        title: "Bienvenue ...",
        subtitle: "Démarrer...",
        image: joe
    },
    {
        title: "Bienvenue ...",
        subtitle: "Démarrer...",
        image: joe2
    },
]
class OnBoarding extends Component {
    state = {  
        index: 0,
    }

    displayCard = (card, index) => {
        return (
            <div className={style.card} active={index === this.state.index} key={index}>
                <div className="image">
                    <img src={card.image} alt="joe1"/>
                    <button>passer</button>
                </div>
                <div className="text">
                    <h1>{card.title}</h1>
                    <p>{card.subtitle}</p>
                </div>
            </div>
        )
    }
    render() { 
        return (  
            <section className={style.onBoarding}>
                {cards.map(this.displayCard)}
            
            </section>
        );
    }
}
 
export default OnBoarding;