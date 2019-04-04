import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import AddProperty from './AddProperty.js'
import DisplayTestament from './DisplayTestament'
import IS_ADD_OWNER_OPENED from '../../actions/rootActions.js'

import { connect } from 'react-redux'

class ToggleAdd extends Component {
    render() { 
        return (  
            <div>
                {this.props.isOpened ? 
                    <AddProperty />            
                    :
                    <DisplayTestament />
                }
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        isOpened: state.isOpened,
    }
}

export default connect(mapStateToProps)(ToggleAdd);