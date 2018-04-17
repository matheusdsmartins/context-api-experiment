import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AppProvider from './components/context/AppContext'
import NumberButton from './components/button/NumberButton'

const IncrementNumber = props => {
  return (
    <NumberButton
      onClick={props.increment}
    />
  )
}

const DecrementNumber = props => {
  return (
    <NumberButton
      onClick={props.decrement}
    />
  )
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <AppProvider>
            <IncrementNumber />
            <DecrementNumber />
          </AppProvider>
        </p>
      </div>
    )
  }
}

export default App
