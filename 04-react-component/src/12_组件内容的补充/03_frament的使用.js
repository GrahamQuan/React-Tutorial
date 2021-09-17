import React, { PureComponent, Fragment } from 'react'

class Counter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }
  render() {
    return (
      <>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={() => this.increment()}>+1</button>
      </>
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
    this.state = {
      friends: [
        {name: 'aaa', age:1},
        {name: 'bbb', age:2},
        {name: 'ccc', age:3},
        {name: 'ddd', age:4},
      ]
    }
  }

  render() {
    return (
      <div className='App'>
        <Counter />
        {
          this.state.friends.map(item => {
            return (
              <Fragment key={item.name}>
                <h3>{item.name}</h3>
                <div>{item.age}</div>
              </Fragment>
            )
          })
        }
      </div>
    )
  }
}
