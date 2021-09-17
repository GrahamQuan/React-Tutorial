import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: [
        { name: "Jack", age: 18 },
        { name: "May", age: 30 },
        { name: "Sam", age: 40 },
      ],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={item.name}>
                {item.name + ", " + item.age}
                <button onClick={() => this.incrementAge(index)}>age+1</button>
              </li>
            );
          })}
        </ul>
        <button onClick={() => this.add()}>add</button>
      </div>
    );
  }

  add() {
    const newFriend = {
      name: "Tom",
      age: 16,
    };

    const newArr = [...this.state.friends, newFriend];
    this.setState({
      friends: newArr,
    });
  }

  incrementAge(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends,
    });
  }
}
