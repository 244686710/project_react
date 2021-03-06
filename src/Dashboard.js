import React from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import App from './App'
import { logout } from './auth.redux'
function Erying() {
    return (<h1>二营</h1>)
}
function Qibinglian() {
    return (<h1>骑兵连</h1>)
}
@connect(
    state => state.auth,
    {logout}
)
class Dashboard extends React.Component{
    constructor(props) {
        super(props)
    }
    render () {
        const redirectToLogin = <Redirect to="/login"></Redirect>
        const app = (
            <div>
                <h1>独立团</h1>
                {this.props.isAuth? <button onClick={this.props.logout}>注销</button>: null}
                <ul>
                    <li>
                        <Link to="/dashboard">一营</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/erying">二营</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/qibinglian">骑兵连</Link>
                    </li>
                </ul> 
                <Route path="/dashboard/" exact component={App}></Route>
                <Route path="/dashboard/erying" component={Erying}></Route>
                <Route path="/dashboard/qibinglian" component={Qibinglian}></Route>
            </div>
        )
        return  this.props.isAuth ? app : redirectToLogin
        
    }
}

export default Dashboard