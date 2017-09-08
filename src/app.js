import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
// import Palette from './pages/Palette'
// import Editor from './pages/Editor'
import './assets/css/base.css'
import './assets/css/bootstrap.min.css'
import configureStore from './reducers'

import DragEditor from './pages/DragEditor'

let store = configureStore()
render(
    <Provider store={store}>
        <DragEditor/>
    </Provider>,
    document.getElementById('app')
)
