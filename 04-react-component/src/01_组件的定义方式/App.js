import React, {Component} from 'react' 

//  1.class组件
// export default class App extends Component{
//   constructor(){
//     super()
//     this.state = {
//       messgae: 'hello react'
//     }
//   }

//   render(){
//     const { messgae } = this.state
//     return (
//       <div> { messgae } </div>
//     )
//   }
// }


/**
 *  2.函数式组件
 *  特点：1.没有this指向  2.没有内部的state -> hooks的产生
 * 
 */

export default function App() {
  return (
    <div>hello function</div>
  )
}
