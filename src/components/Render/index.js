import React, {Component} from 'react'
import './index.less'
import Drop from '../Drop/'

export default class Render extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="render">
                <Drop></Drop>
            </div>
        )
    }
}
