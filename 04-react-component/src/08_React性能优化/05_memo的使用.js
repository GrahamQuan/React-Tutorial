import React, { Component, PureComponent, memo } from "react";

const MemoHeader = memo(
  function Header() {
    console.log("Header render");
    return <h2>Header</h2>;
  }
)

const MemoFooter = memo(
  function Footer() {
    console.log("Footer render");
    return <h2>Footer</h2>;
  }
)

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "hello world",
    };
  }

  render() {
    console.log("App render");

    return (
      <div>
        <h3>PureComponent</h3>
        <h3>{"counter: " + this.state.counter}</h3>
        <button onClick={(e) => this.add()}>+1</button>
        <h3>{this.state.message}</h3>
        <button onClick={(e) => this.changeText()}>change text</button>
        <MemoHeader />
        <MemoFooter />
      </div>
    );
  }

  add() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  changeText() {
    this.setState({
      message: "你好 世界",
    });
  }
}
