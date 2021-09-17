import React, { PureComponent, createContext } from 'react'

const UserContext = createContext({
  userName: 'default',
  age: 0,
  region: 'C'
})


class Home extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <UserContext.Consumer>
      {
        user => {
          return (
            <h3>
              Home: { `name: ${user.userName}, 
                      age: ${user.age}, 
                      region: ${user.region}` }
            </h3>
          )
        }
      }
      </UserContext.Consumer>
    )
  }
}

class About extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <UserContext.Consumer>
      {
        user => {
          return (
            <h3>
              About: { `name: ${user.userName}, 
                      age: ${user.age}, 
                      region: ${user.region}` }
            </h3>
          )
        }
      }
      </UserContext.Consumer>
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{userName:'Graham', age: 18, region: 'China'}} >
          <Home />
          <About />
        </UserContext.Provider>
      </div>
    )
  }
}
