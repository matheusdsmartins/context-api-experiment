import React from 'react'

import { AppContext } from '../context/AppProvider'

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
