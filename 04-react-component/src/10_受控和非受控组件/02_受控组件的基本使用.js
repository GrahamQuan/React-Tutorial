import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    const { name } = this.state

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='username'>
            name: 
            {/* 受控组件 */}
            <input 
              type='text' 
              id='username' 
              onChange={e => this.handleChange(e)} 
              value={name}/>
          </label>
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.name);
  }

}
