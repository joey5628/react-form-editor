import React, {Component} from 'react'
import {render} from 'react-dom'
import Hello from './components/Hello'
import Palette from './pages/Palette'
import './assets/css/base.css'

render(<Palette/>, document.getElementById('app'))
