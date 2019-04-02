import React, { Component } from 'react'
import joe from './joe.png'
import joe2 from './joe2.png'

import style from './OnBoarding.module.css'

const cards = [
    {
        title: "Bienvenue sur Post Mortem !",
        subtitle: "Démarre l'aventure avec toutes les clés en main pour comprendre ce qui t'attends.",
        image: joe
    },
    {
        title: "Organise tes obsèques",
        subtitle: "Décide toi même comment tes proches te diront adieu, de quelle manière tu les quitteras et où tu résideras pour toujours.",
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
                <div className={style.image}>
                    <img src={card.image} alt="joe1"/>
                    <button><span>passer</span></button>
                </div>
                <div className={style.text}>
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