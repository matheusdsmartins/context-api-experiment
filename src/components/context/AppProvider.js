import React, { Component } from 'react'

export const AppContext = React.createContext({ number: 0 })

class AppProvider extends Component {
  state = {
    number: 0
  }

  render () {
    const childrenWithProps = this.props.children.map(child => {
      return React.cloneElement(child, { increment: this.increment, decrement: this.decrement })
    })
    return (
      <AppContext.Provider value={this.state.number}>
        {childrenWithProps}
      </AppContext.Provider>
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
