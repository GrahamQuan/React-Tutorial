import React, { PureComponent } from 'react'
import {createPortal} from 'react-dom'
import './style.css'

// 需要现在index.html获取元素
// portal渲染：独立于父组件或DOM的
class ModelPortal extends PureComponent {
  render() {
    return createPortal(
      this.props.children,
      document.getElementById('model')
    )
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <ModelPortal>
          <h3>Portal</h3>
        </ModelPortal>
      </div>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}
