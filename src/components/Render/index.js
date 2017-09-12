import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as renderActions from '@/reducers/render/renderActions'
import './index.less'
import Drop from '../Drop/'
import EditLayer from '../EditLayer/'


function mapStateToProps (state) {
    return {
        render: state.render,
        modules: state.modules,
        selectedClientRect: state.property.selectedClientRect
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(renderActions, dispatch)
    }
}


class Render extends Component {
    constructor(props) {
        super(props)
    }

    onClick = (event) => {

    }

    render() {
        const { modules, actions, render, selectedClientRect } = this.props
        return (
            <div className="render"
                onClick={this.onClick}
                >
                <Drop
                    modules={modules}
                    actions={actions}
                    render={render}/>
                <EditLayer
                    selectedClientRect={selectedClientRect}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Render)
