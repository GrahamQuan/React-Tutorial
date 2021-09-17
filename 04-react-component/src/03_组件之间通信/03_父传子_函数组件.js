import React, { Component } from 'react'

function ChildCpn(props) {
  const { name, age, arr } = props

  return (
    <div> 
      <h3>{ 'name : '+ name +', '+ 'age : '+age}</h3>
      <ul>
        {
          arr.map((item, index) => {
            return <li> {index + '---' + item} </li>
          })
        }
      </ul>
    </div>
  )
}


export default class App extends Component {
  render() {
    return (
      <div>
        <h2>函数组件</h2>
        <ChildCpn name='Graham' age='18' arr={ ['aaa', 'bbb', 'ccc'] }/>
        <ChildCpn name='Leo' age='20' arr={ ['111', '222', '333'] }/>
      </div>
    )
  }
}
