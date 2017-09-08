import React, { Component } from 'react'
import './index.less'

export default class Col extends Component {
    constructor(props) {
        super(props)
    }

    onDragEnter = (event) => {
        console.log('onDragEnter')
        console.log(event.target)
        this.refs.drop.classList.add('drop-hover');
        if (event.stopPropagation) {
            event.stopPropagation()
        }
    }

    onDragOver = (event) => {
        event.preventDefault()
    }

    onDragLeave = (event) => {
        console.log('onDragLeave')
        console.log(event.target)
        this.refs.drop.classList.remove('drop-hover');
        if (event.stopPropagation) {
            event.stopPropagation()
        }
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

    render() {
        const { span } = this.props
        console.log('col span:', span)
        return (
            <div className={`col-md-${span} drop-default`}
                ref="drop"
                onDragEnter={this.onDragEnter}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}>
            </div>
        )
    }
}
