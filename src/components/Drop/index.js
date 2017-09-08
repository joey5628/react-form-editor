import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as renderActions from '@/reducers/render/renderActions'
import { Col, Row } from '@/modules/index'
import './index.less'

function mapStateToProps (state) {
    return {
        render: state.render
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
        console.log('onDragEnter')
        console.log(event.target)
        this.refs.drop.classList.add('drop-hover');
    }

    onDragOver = (event) => {
        event.preventDefault()
    }

    onDragLeave = (event) => {
        console.log('onDragLeave')
        console.log(event.target)
        this.refs.drop.classList.remove('drop-hover');
    }

    onDrop = (event) => {
        event.preventDefault()
        if (event.stopPropagation) {
            event.stopPropagation()
        }

        let data = event.dataTransfer.getData('text')
        console.log('data:', data);
        this.refs.drop.classList.remove('drop-hover');
        this.props.actions.addRow(JSON.parse(data))
    }

    renderCol (col) {
        return col.map((cur, index) => {
            return (
                <Col key={`col_${index}`}
                    span={cur}/>
            )
        })
    }

    renderRow () {
        const { render } = this.props
        return render.map((cur, index) => {
            return (
                <Row key={`row_${index}`}>
                    {this.renderCol(cur.value)}
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
