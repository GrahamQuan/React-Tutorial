import React, { Component, Profiler } from 'react'

// 组件通信：props，还可以使用'属性展开'传递props

function ProfileHeader(props) {
  return (
    <div>
      <h3>{ 'name: '+ props.name}</h3>
      <h3>{ 'age: ' + props.age}</h3>
    </div>
  )
}


function Profile(props) {
  return (
    <div>
      <ProfileHeader name={props.name} age={props.age}/>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

// 属性展开传递props
function ProfileHeader1(props) {
  return (
    <div>
      <h3>{ 'name: '+ props.name}</h3>
      <h3>{ 'age: ' + props.age}</h3>
    </div>
  )
}


function Profile1(props) {
  return (
    <div>
      <ProfileHeader1 {...props}/>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Graham',
      age: 18
    }
  }


  render() {
    const { name, age } = this.state
    return (
      <div>
        <Profile name={name} age={age}/>
        <hr/>
        <Profile1 {...this.state}/>
      </div>
    )
  }
}
