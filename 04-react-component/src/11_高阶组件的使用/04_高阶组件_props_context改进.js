import React, { PureComponent, createContext } from "react";

const UserContext = createContext({
  userName: "default",
  age: 0,
  region: "C",
});

// 高阶组件
function withCpn(WrappedCpn) {
  return (props) => {
    return (
      <UserContext.Consumer>
        {(user) => {
          return <WrappedCpn {...props} {...user} />;
        }}
      </UserContext.Consumer>
    );
  };
}

class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h3>
        Home:
        {`name: ${this.props.userName}, 
                      age: ${this.props.age}, 
                      region: ${this.props.region}`}
      </h3>
    );
  }
}

class About extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h3>
        About:
        {`name: ${this.props.userName}, 
                      age: ${this.props.age}, 
                      region: ${this.props.region}`}
      </h3>
    );
  }
}

class Detial extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.userName}</li>
          <li>{this.props.age}</li>
          <li>{this.props.region}</li>
        </ul>
      </div>
    );
  }
}

const EnhanceHome = withCpn(Home);
const EnhanceAbout = withCpn(About);
const EnhanceDetial = withCpn(Detial);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider
          value={{ userName: "Graham", age: 18, region: "China" }}
        >
          <EnhanceHome />
          <EnhanceAbout />
          <EnhanceDetial />
        </UserContext.Provider>
      </div>
    );
  }
}
