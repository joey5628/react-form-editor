/**
 * @fileOverView 布局中的列组件
 * @author zhangyi
 * @date 2017-09-11
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as renderActions from '@/reducers/render/renderActions'
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

class Col extends Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps) {
        const preProps = this.props
        if (nextProps.render != preProps.render) {
            return true
        }
        return false
    }

    onDragEnter = (event) => {
        let { draggingModule } = this.props.modules
        if (draggingModule.type !== 'layout') {
            this.refs.drop.classList.add('drop-hover');
        }
        if (event.stopPropagation) {
            event.stopPropagation()
        }
    }

    onDragOver = (event) => {
        event.preventDefault()
    }

    onDragLeave = (event) => {
        let { draggingModule } = this.props.modules
        if (draggingModule.type !== 'layout') {
            this.refs.drop.classList.remove('drop-hover');
        }
        if (event.stopPropagation) {
            event.stopPropagation()
        }
    }

    onDrop = (event) => {
        event.preventDefault()
        if (event.stopPropagation) {
            event.stopPropagation()
        }
        let { modules, rowIndex, colIndex } = this.props
        let draggingModule = modules.draggingModule
        if (draggingModule.type !== 'layout') {
            this.refs.drop.classList.remove('drop-hover');
            this.props.actions.addModule({
                rowIndex,
                colIndex,
                draggingModule
            })
        }
    }

    //渲染拖入的组件
    renderModuleComponent () {
        const { module } = this.props
        let moduleNode = null
        if (module && module.component) {
            const ModuleComponent = module.component
            moduleNode = (
                <ModuleComponent
                    data={module.data}
                />
            )
        }
        return moduleNode
    }

    render() {
        const { span } = this.props
        return (
            <div className={`col-md-${span} drop-default`}
                ref="drop"
                onDragEnter={this.onDragEnter}
                onDragOver={this.onDragOver}
                onDragLeave={this.onDragLeave}
                onDrop={this.onDrop}>
                { this.renderModuleComponent() }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Col)
