/**
 * @author zhangyi
 * @date 2017-09-06
 */
import { combineReducers } from 'redux'
import render from './render/renderReducer'
import modules from './modules/modulesReducer'

const rootReducer = combineReducers({
    render,
    modules
})

export default rootReducer
