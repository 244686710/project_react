import React from 'react'
import {connect} from 'react-redux'
import {login} from './auth.redux'
import {Redirect} from 'react-router-dom'
// 两个reducers 
//  合并reducers
@connect (
    state =>state.auth,
    {login}
)
class Auth extends React.Component{
    constructor(props) {
        super(props)
    }
    render () {
        console.log('this.props',this.props)
        return (
              <div>
                {this.props.isAuth ? <Redirect to='/dashboard/'/> : null}
                <h2>你没有权限，需要登陆才可以看</h2>

                <button onClick={this.props.login}>登陆</button>

              </div>
        )
    }
}

export default Auth