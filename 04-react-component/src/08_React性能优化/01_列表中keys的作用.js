import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movies: ['aaa', 'bbb', 'ccc']
    }
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.movies.map(item => {
              return (
                <li key={item}>{item}</li>
              )
            })
          }
        </ul>
        <button onClick={e => this.add()}>add</button>
      </div>
    )
  }

  add(){
    this.setState({
      movies: ['ddd', ...this.state.movies]
    })
  }
}
