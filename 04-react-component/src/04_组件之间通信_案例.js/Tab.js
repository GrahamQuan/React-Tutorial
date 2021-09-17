import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Tab extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0,
    }
  }

  // class组件数据格式验证
  static propTypes = {
    arr: PropTypes.array
  }

  render() {
    const { arr } = this.props
    let { currentIndex } = this.state

    return (
      <div className='tab'>
        {
          arr.map((item, index) => {
            return (
              <div key={item}
                className={'tab-item ' + ( currentIndex === index ? 'active' : '')}
                onClick={ () => this.change(index) }>
                <span className={'tab-item-span '+ ( currentIndex === index ? 'active' : '')}>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  change(index){
    this.setState({
      currentIndex: index
    })

    // 子传父 
    this.props.divClick(index)
  }

}
