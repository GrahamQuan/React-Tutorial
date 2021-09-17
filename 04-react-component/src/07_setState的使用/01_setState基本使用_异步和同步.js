import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      message: 'hello world'
    }
  }

  render() {
    const { message } = this.state

    return (
      <div>
        <h3>{message}</h3>
        <button onClick={e => this.changeCallback()}>callback</button>
        <button onClick={e => this.changeSetTimeOut()}>setTimeout</button>
        <button id='btn'>DOM</button>
      </div>
    )
  }

  // 原生的DOM事件 -> setState变成同步代码
  componentDidMount(){
    const btnElm = document.getElementById('btn')
    btnElm.addEventListener('click', () => {
      this.setState({
        message: '你好 世界'
      })
      console.log('DOM', this.state.message);
    })
  }


  // 方式2，这个比setState的callback更先执行
  // componentDidUpdate(){
  //   console.log('componentDidUpdate()', this.state.message);
  // }

  changeCallback(){
    // 方式1：this.setState(newState, callback)
    this.setState({
      message: '你好 世界'
    }, () => {
      console.log('change1()', this.state.message);
    })
  }


  // setTimeout包裹setState -> setState变成同步代码
  changeSetTimeOut(){
    setTimeout(()=>{
      this.setState({
        message: '你好 世界'
      })
      console.log('setTimeout', this.state.message);
    }, 0)
  }


}
