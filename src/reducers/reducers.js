/**
 * @author zhangyi
 * @date 2017-09-06
 */
import { combineReducers } from 'redux'
import render from './render/renderReducer'
import modules from './modules/modulesReducer'
import property from './property/propertyReducer'

const rootReducer = combineReducers({
    render,
    modules,
    property
})

export default rootReducer
