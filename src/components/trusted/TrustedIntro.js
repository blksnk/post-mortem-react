import React, { Component } from 'react';
import style from './TrustedIntro.module.css'

export default class TrustedIntro extends Component {
	render() {
		return (
			<section className={style.wrapper}>

				<svg className={style.svg} width="346" height="1231" viewBox="0 0 346 1231" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M69.5 2H42C19.9086 2 2 19.9086 2 42V172.5C2 194.591 19.9086 212.5 42 212.5H272C294.091 212.5 312 230.409 312 252.5V464C312 486.091 294.091 504 272 504H42C19.9086 504 2 521.909 2 544V871.5C2 893.591 19.9086 911.5 42 911.5H304C326.091 911.5 344 929.409 344 951.5V1229" stroke="#A5C4E3" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 15"/>
				</svg>

				<h2 id={style.title}>Mon contact de <br/> confiance</h2>
				<p id={style.p1} className={style.p}>Premièrement, on te propose de désigner ton contact de confiance, étape essentielle pour le reste.</p>

			</section>
		);
	}
}
