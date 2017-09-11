import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as modulesActions from '@/reducers/modules/modulesActions'
import './index.less'

function mapStateToProps (state) {
    return {}
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(modulesActions, dispatch)
    }
}

class Drag extends Component {
    constructor(props) {
        super(props)
    }

    onDragStart = (event) => {
        console.log('onDragStart')
        const { item } = this.props
        this.props.actions.addDraggingModule(item)
        // event.dataTransfer.setData('text', JSON.stringify(item))
        // this.props.actions.addRow(item)
    }

    onDragEnd = (event) => {
        console.log('onDragEnd')
    }

    render() {
        const { item } = this.props
        return (
            <div className="drag" title={item.title}
                draggable
                onDragStart={this.onDragStart}
                onDragEnd={this.onDragEnd}>
                {item.alias}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drag)
