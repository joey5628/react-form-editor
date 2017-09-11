import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as renderActions from '@/reducers/render/renderActions'
import { Col, Row } from '@/modules/index'
import './index.less'

function mapStateToProps (state) {
    return {
        render: state.render,
        modules: state.modules
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(renderActions, dispatch)
    }
}

class Drop extends Component {
    constructor(props) {
        super(props)
    }

    onDragEnter = (event) => {
        let { draggingModule } = this.props.modules
        if (draggingModule.type === 'layout') {
            this.refs.drop.classList.add('drop-hover');
        }
    }

    onDragOver = (event) => {
        event.preventDefault()
    }

    onDragLeave = (event) => {
        let { draggingModule } = this.props.modules
        if (draggingModule.type === 'layout') {
            this.refs.drop.classList.remove('drop-hover');
        }
    }

    onDrop = (event) => {
        event.preventDefault()
        if (event.stopPropagation) {
            event.stopPropagation()
        }
        let { draggingModule } = this.props.modules
        if (draggingModule.type === 'layout') {
            // let data = event.dataTransfer.getData('text')
            this.refs.drop.classList.remove('drop-hover');
            this.props.actions.addRow(draggingModule)
        }
    }

    renderRow () {
        const { render } = this.props
        return render.map((cur, index) => {
            return (
                <Row key={`row_${index}`}
                    rowIndex={index}
                    cols={cur.cols}
                    >
                </Row>
            )
        })
    }

    render () {
        return (
            <div className="drop drop-default" ref="drop"
                onDragEnter={this.onDragEnter}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}>
                {this.renderRow()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drop)
