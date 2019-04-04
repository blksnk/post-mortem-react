import React, { Component } from 'react'

import style from './organes.module.css'

import Navbar from '../global/Navbar'
import OrganesCard from './OrganesCard'
import OverlayCard from '../global/OverlayCard'

const placeholderImg = 'http://lorempixel.com/g/400/400'

const organesArray = [{
	name: 'foie',
	image: placeholderImg,
}, {
	name: 'coeur',
	image: placeholderImg,
},{
	name: 'poumon',
	image: placeholderImg,
}, {
	name: 'reins',
	image: placeholderImg,
}, {
	name: 'cornee',
	image: placeholderImg,
}, {
	name: 'intestin',
	image: placeholderImg,
},]

export default class OrganesPick extends Component {
	constructor(props) {
		super(props)
		this.state = {
			foie: false,
			coeur: false,
			poumoun: false,
			reins: false,
			cornee: false,
			intestin: false,
			confirmation: false,
			overlay: false,
		}
	}

	selectAll() {
		for (let key in this.state) {
			console.log(key)
			if(key !== 'confirmation' && key !== 'overlay') {

				this.setState( { [key]: true } )
			}
		}
	}

	confirmSelection() {
		//verify if at least one is selected
		
		//display confirmation
		if(!this.state.confirmation) {
			this.setState( { confirmation: true } )
		}
		else {
			//if press again in confirmation, save to db
			this.validate()
		}
	}

	validate() {
		console.log('validate')


		//action backend

		this.setState( { overlay: true } )
	}

	selectComponent(name) {
		console.log(name)
		this.setState({[name]: !this.state[name]})
	}

	render() {
		return (
			<section>

				<Navbar leftUrl='/organes/choisir'/>
				<h1>
					Don d'organe
				</h1>

				<p>
					Bravo, tu vas pouvoir sauver des vies ! Tu n’es pas obligé de tout donner : Choisis les organes que tu acceptes de donner
				</p>

				<button onClick={() => this.selectAll()}>
					Tout donner
				</button>

				<div className={style.itemWrapper}>
					{organesArray.map(item => (
						<button key={item.name} className={style.itemBtn} onClick={() => this.selectComponent(item.name)}>
							<OrganesCard name={item.name} active={this.state[item.name]} image={item.image}/>
						</button>
						))}
				</div>

				<div className={style.bottom}>
					{this.state.confirmation ? 
						<button onClick={() => this.setState({confirmation: false})}>Retour</button>
						: null
					}

					<button onClick={() => this.confirmSelection()}>Valider</button>
				</div>

				{this.state.overlay ? 
					<OverlayCard
					title='Coeur sur toi'
					subtitle={`Tu es tellement généreux que je t'ai écris une chanson :
					"C'est l'histoire de la MORT
					Le cycle éternel
					Qu'un enfant béni
					Rend immortel"`}
					button="Cool, retour à l'accueil"
					homeLink={false}
					/>
					: null
				}
			</section>
		);
	}
}
