import React, { Component } from 'react'
import joe from './joe.png'
import joe2 from './joe2.png'
import dotActive from './dot-active.svg'
import dotInactive from './dot-inactive.svg'

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
    {
        title: "Test",
        subtitle: "Bonjour",
        image: joe
    },
    {
        title: "Test",
        subtitle: "Bonjour",
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
            <div id={'card-' + index} className={style.card} key={index}>
                <div className={style.image}>
                    <img src={card.image} alt="joe1"/>
                    {this.state.index > 0 ? 
                        <button onClick={this.handlePreviousChange}>précédent</button> : 
                        null
                    }
                    {this.state.index < 4 ? 
                        <button onClick={this.handleNextChange}>suivant</button> : 
                        null
                    }
                </div>
                <div className={style.text}>
                    <h1>{card.title}</h1>
                    <p>{card.subtitle}</p>
                </div>
            </div>
        )
    }

    displayPagination = (card, index) => {
        if(index === this.state.index) {
            return (
                <div className="dot active" key={index}>
                    <img src={dotActive} alt='dot-active'></img>
                </div>
            )
        } else {
            return (
                <div className="dot" key={index}>
                    <img src={dotInactive} alt='dot-inactive'></img>
                </div>
            )
        }
    }

    handleNextChange = (event) => {
        const newIndex = this.state.index + 1;
        this.setState({ index:  newIndex});
        const card = document.getElementById('card-' + newIndex );
        card.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    handlePreviousChange = (event) => {
        const newIndex = this.state.index - 1;
        this.setState({ index: newIndex });
        const card = document.getElementById('card-' + newIndex );
        card.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    render() {
        return (  
            <section className="wrapper">
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