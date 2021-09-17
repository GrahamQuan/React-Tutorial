import React, { Component } from 'react'

class ChildCpn extends Component{
  // 方式 1
  // constructor(props){
  //   super()
  //   this.props = props
  // }

  // 方式 2
  // constructor(props){
  //   super(props)
  // }

  // 方式 3
  // 什么都不写，默认等于是方式2的写法

  render() {
    // 下面的this ---- ES5中继承，子类通过call绑定自身的this传给父类
    const { name, age } = this.props

    return (
      <div>
        <div>{ 'name : '+ name +', '+ 'age : '+age}</div>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>class组件</h2>
        <ChildCpn name='Graham' age='18'/>
        <ChildCpn name='Leo' age='20'/>
      </div>
    )
  }
}
