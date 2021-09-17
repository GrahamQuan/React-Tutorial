import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }

  render() {
    const { color } = this.state

    return (
      <div>
        <form>
          <select 
            name="color" 
            onChange={e => this.handleChange(e)}
            value={color}>
            <option value="blue">蓝色</option>
            <option value="red">红色</option>
            <option value="yellow">黄色</option>
            <option value="green">绿色</option>
          </select>
        </form>
      </div>
    )
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      color: e.target.value
    })
  }

}
