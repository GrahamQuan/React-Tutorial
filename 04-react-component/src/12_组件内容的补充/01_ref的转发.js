import React, { PureComponent, createRef, forwardRef, createFactory } from 'react'

class Home extends PureComponent {
  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

// forwardRef 接受函数组件，返回一个组件
const About = forwardRef((porps, ref) => {
  return (
    <h3 ref={ref}>about</h3>
  )
})

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.homeRef = createRef()
    this.aboutRef = createRef()
  }

  render() {
    return (
      <div>
        <Home ref={this.homeRef}/>
        <About ref={this.aboutRef}/>
        <button onClick={() => this.print()}>print</button>
      </div>
    )
  }

  print() {
    console.log(this.homeRef.current);
    console.log(this.aboutRef.current);
  }
}
