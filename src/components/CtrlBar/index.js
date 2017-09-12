import React, { Component } from 'react'
import './index.less'

export default class CtrlBar extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="ctrl-bar">
                <button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                删除
            </div>
        )
    }
}
