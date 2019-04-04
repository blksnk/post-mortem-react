import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Navbar from '../Navbar'

export default class OrganesChoice extends Component {
	render() {
		return (
			<section>
			<Navbar leftUrl='/organes/intro'/>
				<h1>
					Don D'organe
				</h1>

				<h3>
					VEUX TU DONNER TES ORGANES?
				</h3>

				<div>
					<Link to='/organes/pick'>
						OUI
					</Link>

					<Link to='/organes/refus'>
						NON
					</Link>
				</div>
			</section>
		);
	}
}
