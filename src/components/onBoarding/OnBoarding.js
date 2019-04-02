import React, { Component } from 'react'
import joe from './joe.png'
import joe2 from './joe2.png'
import dotActive from './dot-active.svg'
import dotInactive from './dot-inactive.svg'

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
    {
        title: "Test",
        subtitle: "Bonjour",
        image: joe
    }
]

class OnBoarding extends Component {
    state = {  
        index: 0,
    }

    displayCard = (card, index) => {
        const active = (index === this.state.index);
        return (
            <div id={'card-' + index} ref={'card-' + index}  className={style.card + (active ? ' ' + style.active : '') + 'card-' + index } active={active} key={index}>
                <div className="image">
                    <img src={card.image} alt="joe1"/>
                    <button onClick={this.handleNextChange}>suivant</button>
                </div>
                <div className="text">
                    <h1>{card.title}</h1>
                    <p>{card.subtitle}</p>
                </div>
            </div>
        )
    }

    displayPagination = (card, index) => {
        if(index == this.state.index) {
            return (
                <div className="dot active">
                    <img src={dotActive} alt='dot-active'></img>
                </div>
            )
        } else {
            return (
                <div className="dot">
                    <img src={dotInactive} alt='dot-inactive'></img>
                </div>
            )
        }
    }

    handleNextChange = (event) => {
        const newIndex = this.state.index + 1;
        this.setState({ index:  newIndex});
        
        const card = document.getElementById('card-' + newIndex );
        card.scrollIntoView();
    }

    render() { 
        return (  
            <section className="main">
                <div className={style.onBoarding}>
                    {cards.map(this.displayCard)}
                </div>
                <div className={style.pagination}>
                    {cards.map(this.displayPagination)}
                </div>
            </section>
        );
    }
}
 
export default OnBoarding;