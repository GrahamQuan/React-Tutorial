import React, { Component } from 'react'
import Nav1 from './Nav1'
import Nav2 from './Nav2'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav1>
          <b>{ '<' }</b>
          <strong>bbb</strong>
          <a href='/#'>ccc</a>
        </Nav1>
        <br/>
        <Nav2 leftSlot={ <b>{ '<' }</b> }
              centerSlot={<strong>bbb</strong>}
              rightSlot={<a href='/#'>ccc</a>}
        />
      </div>
    )
  }
}
