import React, { Component } from 'react'
import style from './Obseques.module.css'

class Obseques extends Component {
    state = {  
        index: 0,
    }

    render() {
        return (  
            <section className={style.wrapper}>
                Obseques
            </section>
        );
    }
}
 
export default Obseques;