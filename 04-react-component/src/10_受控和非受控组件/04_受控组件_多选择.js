import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pwd: "",
      phone: "",
    };
  }

  render() {
    const { name, pwd, phone } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label htmlFor="name">
              账号:
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => this.handleChange(e)}
                value={name}
              />
            </label>
          </div>
          <div>
            <label htmlFor="pwd">
              密码:
              <input
                type="password"
                id="pwd"
                name="pwd"
                onChange={(e) => this.handleChange(e)}
                value={pwd}
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              手机:
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={(e) => this.handleChange(e)}
                value={phone}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault()
    const { name, pwd, phone } = this.state
    console.log(name, pwd, phone);
  }

  handleChange(e) {
    console.log(e.target.value);
    // 动态获取数据名称
    // 计算属性名
    this.setState({
      [e.target.name]: e.target.value  
    })
  }
}
