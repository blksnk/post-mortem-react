import React, { Component } from 'react'
import { connect } from 'react-redux'

import AddOwner from './AddOwner.js'
import ToggleAdd from './ToggleAdd';
import {IS_OPENED, IS_ADD_OWNER_OPENED  } from '../../actions/rootActions.js'

class Testament extends Component {
    render() {
        return (
            <div>
                {this.props.isAddOwnerOpened ? 
                <AddOwner />
                :
                <ToggleAdd /> 
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isOpened: state.isOpened,
        isAddOwnerOpened: state.isAddOwnerOpened,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        OverlayIsOpened: () => {
            dispatch( IS_OPENED() )
        },
        toggleAddOwner: () => {
            dispatch( IS_ADD_OWNER_OPENED() )
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Testament);