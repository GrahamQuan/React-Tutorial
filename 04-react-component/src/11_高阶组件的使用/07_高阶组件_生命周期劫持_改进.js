import React, { PureComponent } from "react";

function withInterval(WrappedCpn) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = new Date();
    }
    componentDidMount() {
      this.endTime = new Date();
      const interval = this.endTime - this.beginTime;
      // 获取组件名称：Cpn.name
      console.log(`${WrappedCpn.name} time : ${interval}`);
    }
    render() {
      return <WrappedCpn />;
    }
  };
}

class Home extends PureComponent {
  render() {
    return <div>Home</div>;
  }
}

class About extends PureComponent {
  render() {
    return <div>About</div>;
  }
}

const IntervalHome = withInterval(Home);
const IntervalAbout = withInterval(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <IntervalHome />
        <IntervalAbout />
      </div>
    );
  }
}
