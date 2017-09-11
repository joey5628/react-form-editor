import React, { Component } from 'react'
import Col from '../Col'
import './index.less'

export default class Row extends Component {
    constructor(props) {
        super(props)
    }

    renderCol () {
        let { cols, rowIndex } = this.props
        return cols.map((cur, colIndex) => {
            return (
                <Col key={`col_${colIndex}`}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                    module={cur.module}
                    span={cur.span}/>
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
