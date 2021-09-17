import React, { PureComponent } from 'react'
import { EventEmitter } from 'events' 

// 事件总线
const eventBus = new EventEmitter()

class Home extends PureComponent {
  // 监听eventbus
  componentDidMount() {
    eventBus.addListener('sayHi', this.handleEventBus)
  }
  // 移除eventbus
  componentWillUnmount() {
    eventBus.removeListener('sayHi', this.handleEventBus)
  }
  // 抽离出函数
  handleEventBus(num, msg) {
    console.log(num, msg);
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <br/>
        <button onClick={() => this.send()}>send</button>
      </div>
    )
  }

  // emit发送eventbus
  send() {
    eventBus.emit('sayHi', 123, 'hello home!')
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home> 
        <Profile></Profile>
      </div>
    )
  }
}
