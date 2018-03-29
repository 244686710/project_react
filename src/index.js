import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import {counter, addGUN, removeGUN, addGunAsync} from './index.redux'

const store = createStore(counter, applyMiddleware(thunk)) // applyMiddleware使用中间件
    // thunk的使用主要是修改我们action crate的方式

function render() {
    ReactDom.render(<App store = {store} 
        addGUN = {addGUN}
        removeGUN = {removeGUN}
        addGunAsync = {addGunAsync}
        />, document.getElementById('root'))
}
render()
store.subscribe(render)
