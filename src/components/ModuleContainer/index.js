import React, {Component} from 'react'
import Drag from '../Drag/'
import './index.less'

export default class ModuleContainer extends Component {
    constructor(props) {
        super(props)
    }

    renderItem (items) {
        let node = items.map((cur, index) => {
            return (
                <li key={`item_${index}`}>
                    <Drag item={cur}></Drag>
                </li>
            )
        })
        return (
            <ul>
                {node}
            </ul>
        )
    }

    renderModules () {
        const modules = this.props.modules
        return modules.map((cur, index)=>{
            return (
                <div className="module-area" key={`module_${index}`}>
                    <h4>{cur.title}</h4>
                    {this.renderItem(cur.items)}
                </div>
            )
        })
    }

    render () {
        console.log('this.props:', this.props)
        return (
            <div className="module-container">
                {this.renderModules()}
            </div>
        )
    }
}
