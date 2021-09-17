import React, { PureComponent } from 'react'

class App extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        App: {this.props.name}
      </div>
    )
  }
}

// 高阶组件，返回：类组件
function enhanceClassCpn(WrappedCpn) {
  class NewClassCpn extends PureComponent {
    render() {
      return (
        <div>
          <WrappedCpn {...this.props}/>
        </div>
      )
    }  
  }
  // 给 NewClassCpn 组件起别名
  NewClassCpn.displayName = 'enhanceClassCpn'
  // 注意下面的返回值，不能写成 <Cpn/>
  return NewClassCpn
}


// 高阶组件，返回：函数组件
function enhanceFuncCpn(WrappedCpn) {
  function NewFuncCpn(props) {
    return <WrappedCpn {...props}/>
  }

  NewFuncCpn.displayName = 'enhanceFuncCpn'
  return NewFuncCpn
}

const EnhanceCpn1 = enhanceClassCpn(App)
const EnhanceCpn2 = enhanceFuncCpn(App)

export default EnhanceCpn2
