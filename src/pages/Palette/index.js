import React, { Component } from 'react'
// import CommonHeader from '../component/CommonHeader/'
// import moduleContainer from '../component/moduleContainer/'
// import RenderContainer from '../component/RenderContainer/'
// import Property from '../component/Property/'
import './index.less'

export default class Palette extends Component {
    constructor(props) {
        super(props)
    }

    onDragStart = (e) => {
        // console.log('e.target:', e.target)
        // e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.outerHTML);
        // e.dataTransfer.setDragImage(e.target, 0, 0);
        return true;
    }

    onDragEnd = (e) => {
        console.log('onDragEnd')
    }

    onDragEnter = (e) => {
        console.log('onDragEnter')
        let target = e.target
        target.style.border = '1px solid red';
    }

    onDragOver = (e) => {
        console.log('onDragOver')
        e.preventDefault();
        // e.dataTransfer.dropEffect = 'move';
        // return false;
    }

    onDragLeave = (e) => {
        console.log('onDragLeave')
        let target = e.target
        target.style.border = '1px dashed #333';
    }

    onDrop = (e) => {
        console.log('onDrop')
        console.log('e.target:', e.target)
        e.preventDefault();
        if (e.stopPropagation) {
          e.stopPropagation();
        }
        // if (dragEl != this) {
        //   dragEl.innerHTML = this.innerHTML;
        e.target.innerHTML = e.dataTransfer.getData('text/html');
        // }
        e.target.style.border = '1px dashed #333';
        return false;
    }

    render() {
        return (
            <div className="layout">
                <div className="header">
                    <h2>react-form-editor</h2>
                </div>
                <div className="container">
                    <div className="module-container">
                        <div className="drog-demo" draggable
                            onDragStart={this.onDragStart}
                            onDragEnd={this.onDragEnd}>
                            拖拽
                        </div>
                    </div>
                    <div className="render">
                        <div className="row">
                            <div className="span4"
                                onDragEnter={this.onDragEnter}
                                onDragOver={this.onDragOver}
                                onDragLeave={this.onDragLeave}
                                onDrop={this.onDrop}></div>
                            <div className="span4"
                                onDragEnter={this.onDragEnter}
                                onDragOver={this.onDragOver}
                                onDragLeave={this.onDragLeave}
                                onDrop={this.onDrop}></div>
                            <div className="span4"
                                onDragEnter={this.onDragEnter}
                                onDragOver={this.onDragOver}
                                onDragLeave={this.onDragLeave}
                                onDrop={this.onDrop}></div>
                        </div>
                    </div>
                    <div className="property"></div>
                </div>
            </div>
        )
    }
}
