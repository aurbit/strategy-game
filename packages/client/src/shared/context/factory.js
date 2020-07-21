import React from 'react'
import logger from 'use-reducer-logger'

export const STATUS = {
  INIT: 'INIT',
  IDLE: 'IDLE',
  GETTING: 'GETTING'
}

function contextFactory (name, initialState, reducer) {
  const INITIAL_STATE = { status: STATUS.IDLE, ...initialState }
  const CONTEXT = React.createContext()

  const useReducer = () => {
    const thisReducer =
      process.env.NODE_ENV === 'development' ? logger(reducer) : reducer
    const memoizedReducer = React.useCallback(thisReducer, [])
    return React.useReducer(memoizedReducer, initialState)
  }

  function Provider ({ children }) {
    const { Provider } = CONTEXT
    const [state, dispatch] = useReducer()
    return <Provider value={{ state, dispatch }}>{children}</Provider>
  }

  // the state context
  function useState () {
    const { state } = React.useContext(CONTEXT)
    if (state === undefined) {
      throw new Error(`${name} useState must be used in a Provider`)
    }
    return state
  }

  function useDispatch () {
    const { dispatch } = React.useContext(CONTEXT)
    if (dispatch === undefined) {
      throw new Error(`${name} useState must be used in a Provider`)
    }
    return dispatch
  }

  return {
    useReducer,
    useState,
    useDispatch,
    Provider,
    INITIAL_STATE
  }
}

export default contextFactory
