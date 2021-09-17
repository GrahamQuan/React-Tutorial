import React, { Component } from 'react'
import { render } from 'react-dom'

// 步骤1：创建context，设置默认值，当组件在 provider 标签外就是默认值
const UserContext = React.createContext({
  name: 'default',
  age: 0
})

// 多个context
const ColorContext = React.createContext({
  oneColor: 'blue'
})


// 步骤3：函数式组件使用Consumer
function Profile() {
  return (
    <UserContext.Consumer>
      {
        // value这个参数名，自定义名字
        value => {
          return (
            // 多个context需要嵌套（实际开发用redux）
            <ColorContext.Consumer>
              {
                myColor => {
                  return (
                    <div style={{color: myColor.oneColor}}>
                      { 'name: ' + value.name}
                      <hr></hr>
                      { 'age: ' + value.age}
                    </div>
                  )
                }
              }
            </ColorContext.Consumer>
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
        <h3>多个context 函数组件</h3>
        {/* 步骤2：传递参数 */}
        {/* 1.传递数据 */}
        <UserContext.Provider value={this.state}>
          <ColorContext.Provider value={{oneColor: 'red'}}>
            <Profile />
          </ColorContext.Provider>
        </UserContext.Provider>
        <hr/>
        {/* 2.使用默认值 */}
        <Profile />
      </div>
    )
  }
}
