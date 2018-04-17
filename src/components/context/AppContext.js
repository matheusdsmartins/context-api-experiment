import React, { Component } from 'react'

const Context = React.createContext(0)

class AppProvider extends Component {
  state = {
    number: 0
  }

  render () {
    return (
      <Context.Provider value={this.state.number}>
        {React.cloneElement(this.props.children, { increment: this.increment, decrement: this.decrement })}
      </Context.Provider>
    )
  }

  increment = () => {
    this.setState(({ number }) => {
      return { number: number + 1 }
    })
  }

  decrement = () => {
    this.setState(({ number }) => {
      return { number: number - 1 }
    })
  }
}

export default AppProvider
