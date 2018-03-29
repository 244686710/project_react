import React, { Component } from 'react';

class App extends Component {
  render () {
    const boss = '李云龙';
    return (
      <div>
        <h2>独立团 -- {boss}</h2>
        <One littleBoss='张大彪'/>
      </div>
    ) 
  }
}

class One extends Component {
  constructor(props){
    super(props)
    this.state = {
      solders: ['虎子', '柱子', '王根生']
    }
    // this.addSolder = this.addSolder.bind(this)
  }
  componentWillMount () {
    console.log('组件马上就要加载了')
  }
  componentDidUpdate () {
    console.log('数据更新了啊')
  }
  addSolder () {
    console.log('add solder')
    this.setState({
      solders: [...this.state.solders, '新兵入伍'+Math.random()]
    })
  }
  render () {
    return (
     <div>
       <h3>一营营长--{this.props.littleBoss}</h3>
       <button onClick={()=> this.addSolder()}>新兵入伍</button>  
       <ul>
         {this.state.solders.map(v => {
           return <li key={v}>{v} </li>
         })}
       </ul>
     </div> 
    )
  }
}

export default App;