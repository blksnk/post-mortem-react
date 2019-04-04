import React, { Component } from 'react'

import OverlayCard from '../global/OverlayCard'

import Navbar from '../Navbar'


export default class OrganesRefus extends Component {
	constructor(props) {
		super(props)
		this.state = {
			confirmation: false
		}
	}

	render() {
		return (
			<section>
				<Navbar leftUrl='/organes/choisir'/>
				<h1>
					Don D'organes
				</h1>

				<div>
					<h3>
						TON CORPS, TON CHOIX
					</h3>

					<p>
						Es-tu sûr(e) ? Tu peux toujours cliquer sur la flêche retour pour changer d’avis 
					</p>

					<div>
						<h4>
							INSCRIS-TOI sur
						</h4>

						<a href='http://registrerefus.com'>
						<h4>
							registrerefus.com
						</h4>
						</a>
					</div>

					<button onClick={() => this.setState({confirmation: true})}>
						Valider
					</button>

					{this.state.confirmation ? 
						<OverlayCard 
						title='Tes voeux sont bien enregistrés !' 
						subtitle='Tu pourras mourir en paix maintenant'
						button='voilà voilà !'
						homeLink={false}
						url='/'
						/>
						: null
					}

				</div>
			</section>
		);
	}
}
