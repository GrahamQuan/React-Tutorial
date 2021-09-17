import React, { PureComponent } from 'react'

function witdAuth(WrappedCpn) {
  const NewCpn = props => {
    const {isLogin} = props
    if (isLogin) {
      return <Cart />
    } else {
      return <Login />
    }
  }

  return NewCpn
}

class Login extends PureComponent {
  render() {
    return (
      <div>
        login
      </div>
    )
  }
}

class Cart extends PureComponent {
  render() {
    return (
      <div>
        Cart
      </div>
    )
  }
}

const AuthCpn = witdAuth(Cart)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCpn isLogin={false} />
      </div>
    )
  }
}
