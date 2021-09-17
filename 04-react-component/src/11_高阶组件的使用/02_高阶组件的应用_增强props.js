import React, { PureComponent } from 'react'

class Home extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>
          Home: { `name: ${this.props.name}, 
                   age: ${this.props.age}, 
                   region: ${this.props.region}` }
        </h3>
      </div>
    )
  }
}

function enhanceClassCpn(WrappedCpn) {
  class NewClassCpn extends PureComponent {
    render() {
      return (
        <div>
          <WrappedCpn {...this.props} region='广州'/>
        </div>
      )
    }
  }

  return NewClassCpn
}

const EnhanceClassCpn = enhanceClassCpn(Home)

class About extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>
         About: { `name: ${this.props.name}, age: ${this.props.age}` }
        </h3>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <EnhanceClassCpn name='Graham' age={18} />
        <About name='Graham' age={18} />
      </div>
    )
  }
}
