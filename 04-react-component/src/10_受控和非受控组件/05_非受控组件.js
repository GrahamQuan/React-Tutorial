import React, { PureComponent, createRef } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.userRef = createRef()

    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="name">
            账号:
            <input
              type="text"
              id="name"
              name="name"
              ref={this.userRef}
              onChange={(e) => this.handleChange(e)}
              value={this.state.name}
            />
            <input type='submit' />
          </label>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.userRef.current);
    this.setState({
      [this.userRef.current.name]: ''
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: this.userRef.current.value
    })
  }

}
