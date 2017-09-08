import React, { Component } from 'react'
import CommonHeader from '@/components/CommonHeader/'
import ModuleContainer from '@/components/ModuleContainer/'
import Render from '@/components/Render/'
import Property from '@/components/Property/'
import './index.less'
import modules from '@/constants/modules'

export default class DragEditor extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className="layout">
                <CommonHeader></CommonHeader>
                <div className="container">
                    <ModuleContainer
                        modules={modules}>
                    </ModuleContainer>
                    <Render></Render>
                    <Property></Property>
                </div>
            </div>
        )
    }
}
