import React, { Component } from 'react'
import joe from './joe.png'
import joe2 from './joe2.png'
import dotActive from './dot-active.svg'
import dotInactive from './dot-inactive.svg'
import {Redirect} from 'react-router-dom'

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
        title: "Rédige un mini testament",
        subtitle: "Décide ce qui adviendra de ton toutou chéri et ta collection de timbres ou renseigne toi sur comment faire un testament avec un notaire.",
        image: joe
    },
    {
        title: "Découvre le don d'organes",
        subtitle: "Apprends en plus sur ce que ça veut dire de donner tes organes après ta disparition et prends une décision pour ton petit corps.",
        image: joe2
    },
    {
        title: "Désigne un contact de confiance",
        subtitle: "Cette personne sera celle qui recevra toutes tes décisions si tu venais à disparaître et qui sera en charge de les appuyer. Choisis bien!",
        image: joe
    }
]

class OnBoarding extends Component {
    state = {  
        index: 0,
        redirect: false,
    }

    displayCard = (card, index) => {
        return (
            <div id={'card-' + index} className={style.card} key={index}>
                <div className={style.image}>
                    <img src={card.image} alt="joe1"/>
                    {this.state.index > 0 ? 
                        <button id={style.previousBtn} onClick={this.handlePreviousChange}>
                            <svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1943 0L20 3.8775L7.63833 16.5L20 29.1225L16.1943 33L0 16.5L16.1943 0Z" fill="#CAD4DF"/>
                            </svg>
                        </button> 
                        : 
                        null
                    }
                    {this.state.index < 4 ? 
                        <button id={style.nextBtn} onClick={this.handleNextChange}>
                            <svg width="20" height="33" viewBox="0 0 20 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.80567 33L0 29.1225L12.3617 16.5L0 3.8775L3.80567 0L20 16.5L3.80567 33Z" fill="#CAD4DF"/>
                            </svg>
                        </button> 
                        : 
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
            <section className={style.wrapper}>
                <div className={style.onBoarding}>
                    {cards.map(this.displayCard)}
                </div>
                <div className={style.pagination}>
                    {
                        this.state.index < 4 ? 
                        cards.map(this.displayPagination)
                        :
                        null
                    } 
                </div>
                {this.state.index >= 4 ? <button onClick={() => this.setState({redirect: true})} id={style.start}>Commencer</button> : null}

                {this.state.redirect ? <Redirect to='/'/> : null}
            </section>
        );
    }
}
 
export default OnBoarding;