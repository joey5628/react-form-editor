import React, { Component } from 'react'
import Col from '../Col'
import './index.less'

export default class Row extends Component {
    constructor(props) {
        super(props)
    }

    renderCol () {
        console.log('row props:', this.props)
        let { cols, rowIndex, modules } = this.props
        return cols.map((cur, colIndex) => {
            return (
                <Col key={`col_${colIndex}`}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                    module={modules[colIndex]}
                    span={cur}/>
            )
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderCol()}
            </div>
        )
    }
}
