import React, { Component } from 'react'
// import CommonHeader from '../component/CommonHeader/'
// import moduleContainer from '../component/moduleContainer/'
// import RenderContainer from '../component/RenderContainer/'
// import Property from '../component/Property/'
import './index.less'

export default class Editor extends Component {
    constructor(props) {
        super(props)
        this.dragDrop = false;
        this.x = 0
        this.y = 0
        this.state = {
            left: null,
            top: null
        }
    }

    componentDidMount () {
        this.startDrag()
    }

    startDrag () {
        let that = this
        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseup', function upEvent(event) {
          window.removeEventListener('mousemove', onMove)
          window.removeEventListener('mouseup', upEvent)
        //   that.stopDrag(event)
        })

        function onMove(event = window.event) {
            console.log('event.target:', event.target)
            // let el = that.refs.drog
            // console.log(el)
            // setTimeout(() => {
            //   el.style.left = `${event.clientX - el.clientWidth / 2}px`
            //   el.style.top = `${event.clientY - el.clientHeight / 2}px`
            // })
        }
    }

    onMouseDown (event) {
        // event.preventDefault();
        // this.dragDrop = true
        // event.stopPropagation();
        // this.startDrag()
    }

    onMouseMove (event) {
        // if (!this.dragDrop) {
        //     return;
        // }
        // console.log(event)
        // debugger
        // let el = event.target
        // let el = this.refs.drog
        // console.log(el)
        // setTimeout(() => {
        //   el.style.left = `${event.pageX - el.clientWidth / 2}px`
        //   el.style.top = `${event.pageY - el.clientHeight / 2}px`
        // })
    }

    onMouseUp (event) {
        // this.dragDrop = false
        // this.startDrag()
    }

    onMouseOver (event) {
        console.log('onMouseOver')
    }

    onMouseOut (event) {
        console.log('onMouseOut')
    }

    render() {
        let style = null
        if (this.state.left !== null) {
            style = {
                position: 'absolute',
                left: this.state.left,
                top: this.state.top
            }
        }
        return (
            <div className="layout">
                <div className="header">
                    <h2>react-form-editor</h2>
                </div>
                <div className="container">
                    <div className="module-container">
                        <div className="drog-demo"
                            style={style}
                            draggable
                            ref="drog"
                            onMouseDown={this.onMouseDown.bind(this)}
                            onMouseMove={this.onMouseMove.bind(this)}
                            onMouseUp={this.onMouseUp.bind(this)}>
                            拖拽
                        </div>
                    </div>
                    <div className="render">
                        <div className="row">
                            <div className="span4"
                                onMouseOver={this.onMouseOver.bind(this)}
                                onMouseOut={this.onMouseOut.bind(this)}></div>
                            <div className="span4"></div>
                            <div className="span4"></div>
                        </div>
                    </div>
                    <div className="property"></div>
                </div>
            </div>
        )
    }
}
