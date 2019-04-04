import React, { Component } from 'react'

import style from './Tuto.module.css'
import Navbar from './Navbar.js'
import lineCapTuto from '../../ressources/icons/lineCapTuto.svg'
import svgItem from '../../ressources/icons/svgItem.svg'
import poumons from '../../ressources/icons/poumons.svg'

class Tuto extends Component {

  displayStep = (step, index) => {
    return (
      <TutoStep svgFile={step.svgBackground} titleSVG={step.title} textSVG={step.description} svg2={step.svgSecond}/>
    )
  }

  render () {

    return (
      <div className={style.wrapper}>
        <Navbar info = {true} />
        <div className = {style.Title} >
          {this.props.title}
        <img src={lineCapTuto} className={style.lineCapTuto} alt="line" />

        </div>
        <div className = {style.description} >
        {this.props.description}
        </div>

        <div className={style.svgList}>
          {this.props.tutoSteps.map(this.displayStep)}
        </div>
      </div>
      )
  }
}

class TutoStep extends Component {
   render () {
   return (
   <div className={style.svgForm}>

         <div className={style.titleSVG}>
          {this.props.titleSVG}

         </div>
         <div className={style.textSVG}>
          {this.props.textSVG}
         </div>

        <img src={this.props.svgFile} className={style.svgFile} alt="line" />
        <img src={this.props.svg2} alt="poumons" />

        </div>
   )
  }
}

class TutoObseques extends Component {


  render () {
      const tutoSteps = [
      {
        svgBackground: svgItem,
        svgSecond: poumons,
        title: "titre",
        description: "description",
      },
      {
        svgBackground: svgItem,
        svgSecond: poumons,
        title: "titre2",
        description: "description2",
      },
      {
        svgBackground: svgItem,
        svgSecond: poumons,
        title: "titre3",
        description: "description3",
      },
    ]
    return (
      <Tuto tutoSteps = {tutoSteps} title = {"Bonjour"} description = {"jiofejofiezj"}/>
    )
  }
}

export default TutoObseques;


