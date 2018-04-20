import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import AppProvider from './components/context/AppProvider'
import NumberButton from './components/button/NumberButton'

const IncrementNumber = props => {
  return (
    <NumberButton
      onClick={props.increment}
    >
    Increment Context - 
    </NumberButton>
  )
}

const DecrementNumber = props => {
  return (
    <NumberButton
      onClick={props.decrement}
    >
    Decrement Context - 
    </NumberButton>
  )
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a experiment of the new React Context API</h1>
        </header>
        <p className="App-intro">
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
