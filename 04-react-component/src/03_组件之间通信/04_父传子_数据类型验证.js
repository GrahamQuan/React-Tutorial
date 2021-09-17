import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 函数组件
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

// 函数组件：数据类型验证
ChildCpn.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  arr: PropTypes.array
}
// 函数组件：默认值
ChildCpn.defaultProps = {
  name: 'default',
  age: 1,
  arr: ['1', '2', '3']
}

// class组件：数据类型验证，默认值，
// 可以用上面函数的写法，也可以用下面的写法
// class ClassChildCpn extends Component {
//   // 数据类型验证
//   static propTypes = {

//   }
//   // 默认值
//   static defaultProps = {
    
//   }
// } 


export default class App extends Component {
  render() {
    return (
      <div>
        <div>
        <h2>数据类型验证</h2>
        <ChildCpn name='Graham' age={18} arr={ ['aaa', 'bbb', 'ccc'] }/>
        <ChildCpn name='Leo' age={20} arr={ ['111', '222', '333'] }/>
      </div>
      </div>
    )
  }
}
