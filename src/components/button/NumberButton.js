import React from 'react'

import { AppContext } from '../context/AppProvider'

const NumberButton = props => {
  const {
    children,
    ...rest
  } = props
  return (
    <AppContext.Consumer>
      {number =>
        <button
        {...rest}
        >
        {children} {number}
        </button>}
    </AppContext.Consumer>
  )
}

export default NumberButton
