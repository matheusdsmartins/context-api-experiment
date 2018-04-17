import React from 'react'

import { AppContext } from '../context/AppContext'

const NumberButton = props => {
  return (
    <AppContext.Consumer>
      {number =>
        <button
        {...props}
        >
        {number}
        </button>}
    </AppContext.Consumer>
  )
}

export default NumberButton
