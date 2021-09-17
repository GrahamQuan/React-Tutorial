import React, { PureComponent } from 'react'

class Home extends PureComponent {
  UNSAFE_componentWillMount() {
    this.beginTime = new Date()
  }
  componentDidMount() {
    this.endTime = new Date()
    const interval = this.endTime - this.beginTime
    console.log(`Home time : ${interval}`);
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

class About extends PureComponent {
  UNSAFE_componentWillMount() {
    this.beginTime = new Date()
  }
  componentDidMount() {
    this.endTime = new Date()
    const interval = this.endTime - this.beginTime
    console.log(`About time : ${interval}`);
  }


  render() {
    return (
      <div>
        About
      </div>
    )
  }
}


export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}
