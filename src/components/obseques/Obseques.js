import React, { Component } from 'react'
import style from './Obseques.module.css'

const cards = [
  {
    title: "Les obsèques de tes rêves",
    subtitle: "",
    index: 0
  },
  {
    title: "Cercueil de tes rêves ?",
    subtitle: "",
    index: 1
  }
]

class Obseques extends Component {
    state = {
        index: 0,
    }

    render() {
        return (
            <section className={style.wrapper}>
              <div className={style.title}>
                <h1>{cards[this.state.index].title}</h1>
              </div>
              <div className="body">
                {{
                  0: (
                    <ObsequesHome />
                  ),
                  1: (
                    <ObsequesCercueil />
                  ),
                }[this.state.index]}
              </div>
              <div className="footer">
              </div>
            </section>
        );
    }
}

class ObsequesHome extends Component {
  render() {
    return (
    <div>
    <button className={style.button}>
      <div className = {style.header}>Test 1</div>
    </button>
   <button className={style.button}>
      <div className = {style.header} >Test 2</div>
    </button>
     <button className={style.button}>
      <div className = {style.header}>Obseques Home</div>
    </button>
     </div>
    )
  }
}

class ObsequesCercueil extends Component {
  render() {
    return (
      <div>Obseques Cercueil</div>
    )
  }
}

export default Obseques;
