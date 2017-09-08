import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import renderActions from '@/reducers/render/renderActions'
import './index.less'

function mapStateToProps (state) {
    return {}
}

function mapDispatchToProps (dispatch) {
    return {
        // actions: bindActionCreators(renderActions, dispatch)
    }
}

class Drag extends Component {
    constructor(props) {
        super(props)
    }

    onDragStart = (event) => {
        console.log('onDragStart')
        const { item } = this.props
        event.dataTransfer.setData('text', JSON.stringify(item))
        // this.props.actions.addRow(item)
    }

    render() {
        const { item } = this.props
        return (
            <div className="drag" title={item.title}
                draggable
                onDragStart={this.onDragStart}>
                {item.alias}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drag)
