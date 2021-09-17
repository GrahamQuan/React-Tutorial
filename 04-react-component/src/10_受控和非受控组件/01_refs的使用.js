import React, { PureComponent, createRef } from 'react'

class Counter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <h4>counter: {this.state.counter}</h4>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    )
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
}

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.objRef = createRef()
    this.funcRef = null
    this.counterRef = createRef()
  }

  render() {
    return (
      <div>
        <h3>ref</h3>
        {/* 方式1：字符串 */}
        <h4 ref='stringRef'>hello world 1</h4>
        {/* 方式2：对象 （推荐） */}
        <h4 ref={this.objRef}>hello world 2</h4>
        {/* 方式1：回调函数 */}
        <h4 ref={argument => this.funcRef = argument}>hello world 3</h4>
        <button onClick={() => this.change()}>change</button>
        <hr/>
        {/* 在类组件中使用ref对象方式 */}
        <Counter ref={this.counterRef}></Counter>
        <button onClick={() => this.counterAdd()}>counter组件 +1</button>
      </div>
    )
  }

  change() {
    this.refs.stringRef.innerHTML = 'hello string'
    console.log(this.objRef.current);
    this.objRef.current.innerHTML = 'hello object'
    console.log(this.funcRef);
    this.funcRef.innerHTML = 'hello function'
  }

  counterAdd() {
    this.counterRef.current.increment()
  }
}
