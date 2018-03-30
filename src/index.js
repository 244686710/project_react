import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import App from './App'
import {counter} from './index.redux'
import {BrowserRouter, Route, Link} from 'react-router-dom'


// const store = createStore(counter, applyMiddleware(thunk)) // applyMiddleware使用中间件
    // thunk的使用主要是修改我们action crate的方式
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 开启redux监控
));
// function render() {
//     ReactDom.render(<App store = {store} 
//         addGUN = {addGUN}
//         removeGUN = {removeGUN}
//         addGunAsync = {addGunAsync}
//         />, document.getElementById('root'))
// }
// render()
// store.subscribe(render)

function Erying() {
    return (<h1>二营</h1>)
}
function Qibinglian() {
    return (<h1>骑兵连</h1>)
  }
ReactDom.render(
    (<Provider store = {store}>
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/">一营</Link>
                </li>
                <li>
                    <Link to="/erying">二营</Link>
                </li>
                <li>
                    <Link to="/qibinglian">骑兵连</Link>
                </li>
            </ul>
            <Route path="/" component={App}></Route>
            <Route path="/erying" component={Erying}></Route>
            <Route path="/qibinglian" component={Qibinglian}></Route>
        </div>
        
    </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
