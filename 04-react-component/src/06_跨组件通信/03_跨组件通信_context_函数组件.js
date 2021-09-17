import React, { Component } from 'react'

// 步骤1：创建context，设置默认值，当组件在 provider 标签外就是默认值
const UserContext = React.createContext({
  name: 'default',
  age: 0
})

// 步骤3：函数式组件使用Consumer
function Profile() {
  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <div>
              { 'name: ' + value.name}
              <hr></hr>
              { 'age: ' + value.age}
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}

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
        <h3>context 函数组件</h3>
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
