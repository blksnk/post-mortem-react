import React, { Component } from 'react'


import Button from '.Button.js'
import style from './Tuto.module.css'
import Navbar from './Navbar.js'
import lineCapTuto from '../../ressources/icons/lineCapTuto.svg'
import svgItem from '../../ressources/icons/svgItem.svg'
import poumons from '../../ressources/icons/poumons.svg'
import organeBack2 from '../../ressources/icons/organeBack2.svg'
import organeBack3 from '../../ressources/icons/organeBack3.svg'
import organeBack4 from '../../ressources/icons/organeBack4.svg'
import organeBack5 from '../../ressources/icons/organeBack5.svg'
import organe2 from '../../ressources/icons/organe2.svg'
import organe3 from '../../ressources/icons/organe3.svg'
import organe4 from '../../ressources/icons/organe4.svg'
import organe5 from '../../ressources/icons/organe5.svg'
import testament1 from '../../ressources/icons/testament1.svg'
import testament2 from '../../ressources/icons/testament2.svg'
import testament3 from '../../ressources/icons/testament3.svg'
import testament4 from '../../ressources/icons/testament4.svg'
import testament5 from '../../ressources/icons/testament5.svg'
import testamentBack1 from '../../ressources/icons/testamentBack1.svg'
import testamentBack2 from '../../ressources/icons/testamentBack2.svg'
import testamentBack3 from '../../ressources/icons/testamentBack3.svg'
import testamentBack4 from '../../ressources/icons/testamentBack4.svg'
import testamentBack5 from '../../ressources/icons/testamentBack5.svg'








const displayStep = (step, index) => {
  return (
    <TutoStep
      key={index}
      right={index % 2 !== 0}
      svgFile={step.svgBackground}
      titleSVG={step.title}
      textSVG={step.description}
      svg2={step.svgSecond}
    />
  )
}

const Tuto = (props) => (
  <div className={style.wrapper}>
    <Navbar info={true}/>
    <div className={style.path}>
      <div className={style.Title}>
        {props.title}
      </div>

      <div className={style.description}>
        {props.description}
      </div>

      <div className={style.svgList}>
        {props.tutoSteps.map(displayStep)}
      </div>
    </div>
  </div>
)

class TutoStep extends Component {
   render () {
   return (
    <>
    <div style={{ padding: "120px" }}/>
     <div className={style.svgForm} style={{ textAlign: this.props.right ? 'right' : 'left' }}>

           <div className={style.titleSVG}>
            {this.props.titleSVG}

           </div>
           <div className={style.textSVG}>
            {this.props.textSVG}
           </div>

          <img src={this.props.svgFile} className={style.svgFile} alt="line" />
          <img src={this.props.svg2} alt="poumons" className={style.responsiveImage}/>
          < Button />
      </div>
    </>
   )
  }
}

class TutoOrgane extends Component {


  render () {
      const tutoSteps = [
      {
        svgBackground: svgItem,
        svgSecond: poumons,
        title: "Sharing is caring",
        description: "92% des dons d’organes ou de tissus viennent d’une personne décédée : même mort tu es utile !",
      },
      {
        svgBackground: organeBack2,
        svgSecond: organe2,
        title: "Tous ensemble !",
        description: "Après avoir progressé pendant des années, le don d’organes a chuté  de 5% en 2018, il est donc primordial de faire les bons choix de son vivant, pour pouvoir sauver des vies !",
      },
      {
        svgBackground: organeBack3,
        svgSecond: organe3,
        title: "Une décision, pas d’incisions",
        description: "Dans la loi française, nous sommes tous donneurs présumés. Chaque individu est considéré comme donneur potentiel.",
      },
       {
        svgBackground: organeBack4,
        svgSecond: organe4,
        title: "L’éthique avant tout !",
        description: "Mais avant de prélever quoique ce soit, le médecin réanimateur demandera toujours l’avis des proches du défunt si celui-ci n’a pas laissé de traces de ses décisions.",
      },
       {
        svgBackground: organeBack5,
        svgSecond: organe5,
        title: "Frankestein 2.0",
        description: "Tu as peur de ressembler à Frankestein ? N’aies crainte ! Les médecins feront en sorte que tu sois parfaitement présentale, tiré à 4 épingles dans ta jolie demeure éternelle.",
      },
    ]
    return (
      <Tuto tutoSteps = {tutoSteps} title = {"Don d'organe"} description = {"Le don d'organe qu'est ce que ca implique ? On t'explique tout ci-dessous"} />

    )
  }
}

class TutoConfiance extends Component {


  render () {
      const tutoSteps = [
      {
        svgBackground: svgItem,
        svgSecond: poumons,
        title: "Sharing is caring",
        description: "92% des dons d’organes ou de tissus viennent d’une personne décédée : même mort tu es utile !",
      },
      {
        svgBackground: organeBack2,
        svgSecond: organe2,
        title: "Tous ensemble !",
        description: "Après avoir progressé pendant des années, le don d’organes a chuté  de 5% en 2018, il est donc primordial de faire les bons choix de son vivant, pour pouvoir sauver des vies !",
      },
      {
        svgBackground: organeBack3,
        svgSecond: organe3,
        title: "Une décision, pas d’incisions",
        description: "Dans la loi française, nous sommes tous donneurs présumés. Chaque individu est considéré comme donneur potentiel.",
      },
       {
        svgBackground: organeBack4,
        svgSecond: organe4,
        title: "L’éthique avant tout !",
        description: "Mais avant de prélever quoique ce soit, le médecin réanimateur demandera toujours l’avis des proches du défunt si celui-ci n’a pas laissé de traces de ses décisions.",
      },
       {
        svgBackground: organeBack5,
        svgSecond: organe5,
        title: "Frankestein 2.0",
        description: "Tu as peur de ressembler à Frankestein ? N’aies crainte ! Les médecins feront en sorte que tu sois parfaitement présentale, tiré à 4 épingles dans ta jolie demeure éternelle.",
      },
    ]
    return (
      <Tuto tutoSteps = {tutoSteps} title = {"Don d'organe"} description = {"Le don d'organe qu'est ce que ca implique ? On t'explique tout ci-dessous"} />

    )
  }
}

class TutoObseques extends Component {


  render () {
      const tutoSteps = [
      {
        svgBackground: svgItem,
        svgSecond: poumons,
        title: "Sharing is caring",
        description: "92% des dons d’organes ou de tissus viennent d’une personne décédée : même mort tu es utile !",
      },
      {
        svgBackground: organeBack2,
        svgSecond: organe2,
        title: "Tous ensemble !",
        description: "Après avoir progressé pendant des années, le don d’organes a chuté  de 5% en 2018, il est donc primordial de faire les bons choix de son vivant, pour pouvoir sauver des vies !",
      },
      {
        svgBackground: organeBack3,
        svgSecond: organe3,
        title: "Une décision, pas d’incisions",
        description: "Dans la loi française, nous sommes tous donneurs présumés. Chaque individu est considéré comme donneur potentiel.",
      },
       {
        svgBackground: organeBack4,
        svgSecond: organe4,
        title: "L’éthique avant tout !",
        description: "Mais avant de prélever quoique ce soit, le médecin réanimateur demandera toujours l’avis des proches du défunt si celui-ci n’a pas laissé de traces de ses décisions.",
      },
       {
        svgBackground: organeBack5,
        svgSecond: organe5,
        title: "Frankestein 2.0",
        description: "Tu as peur de ressembler à Frankestein ? N’aies crainte ! Les médecins feront en sorte que tu sois parfaitement présentale, tiré à 4 épingles dans ta jolie demeure éternelle.",
      },
    ]
    return (
      <Tuto tutoSteps = {tutoSteps} title = {"Don d'organe"} description = {"Le don d'organe qu'est ce que ca implique ? On t'explique tout ci-dessous"} />

    )
  }
}

class TutoTestament extends Component {


  render () {
      const tutoSteps = [
      {
        svgBackground: svgItem,
        svgSecond: poumons,
        title: "Sharing is caring",
        description: "92% des dons d’organes ou de tissus viennent d’une personne décédée : même mort tu es utile !",
      },
      {
        svgBackground: organeBack2,
        svgSecond: organe2,
        title: "Tous ensemble !",
        description: "Après avoir progressé pendant des années, le don d’organes a chuté  de 5% en 2018, il est donc primordial de faire les bons choix de son vivant, pour pouvoir sauver des vies !",
      },
      {
        svgBackground: organeBack3,
        svgSecond: organe3,
        title: "Une décision, pas d’incisions",
        description: "Dans la loi française, nous sommes tous donneurs présumés. Chaque individu est considéré comme donneur potentiel.",
      },
       {
        svgBackground: organeBack4,
        svgSecond: organe4,
        title: "L’éthique avant tout !",
        description: "Mais avant de prélever quoique ce soit, le médecin réanimateur demandera toujours l’avis des proches du défunt si celui-ci n’a pas laissé de traces de ses décisions.",
      },
       {
        svgBackground: organeBack5,
        svgSecond: organe5,
        title: "Frankestein 2.0",
        description: "Tu as peur de ressembler à Frankestein ? N’aies crainte ! Les médecins feront en sorte que tu sois parfaitement présentale, tiré à 4 épingles dans ta jolie demeure éternelle.",
      },
    ]
    return (
      <Tuto tutoSteps = {tutoSteps} title = {"Don d'organe"} description = {"Le don d'organe qu'est ce que ca implique ? On t'explique tout ci-dessous"} />

    )
  }
}



export default TutoOrgane;
export TutoConfiance
export TutoObseques
export TutoTestament



