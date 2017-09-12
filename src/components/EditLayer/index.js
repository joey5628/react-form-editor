/**
 * 选中一个拖放生产的元素，加这个蒙版
 * @author zhangyi
 * @date 2017-09-12
 */
import React, { Component } from 'react'
import './index.less'

export default class EditLayer extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        let style = {display: 'none'}
        const { selectedClientRect } = this.props
        if (selectedClientRect) {
            style = {
                display: 'block',
                left: selectedClientRect.left,
                top: selectedClientRect.top,
                width: selectedClientRect.width,
                height: selectedClientRect.height
            }
        }
        return (
            <div className="edit-layer" style={style}></div>
        )
    }
}
