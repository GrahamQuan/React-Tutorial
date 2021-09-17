import React, { Component } from 'react'

// 步骤1：创建context，设置默认值，当组件在 provider 标签外就是默认值
const UserContext = React.createContext({
  name: 'default',
  age: 0
})

class Profile extends Component {
  render() {
    // 用 this.context获取数据，再用对象的解构
    const { name, age } = this.context

    return (
      <div>
        { 'name: ' + name}
        <hr></hr>
        { 'age: ' + age}
      </div>
    )
  }
}

// 步骤3：class组件接受数据
Profile.contextType = UserContext

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Graham',
      age: 1
    }
  }


  render() {
    return (
      <div>
        {/* 步骤2：传递参数 */}
        {/* 1.传递数据 */}
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
        <hr/>
        {/* 2.使用默认值 */}
        <Profile />
      </div>
    )
  }
}
