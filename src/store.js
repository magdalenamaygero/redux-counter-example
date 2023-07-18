import { configureStore } from '@reduxjs/toolkit'

const initialState = { value: 0, name: '' }

// Actions are objects
// type
// payload (optional)

// Action Creators return action objects
export const incrementCount = () => {
  return {
    type: 'counter/increment'
  }
}

export const updateName = (name) => {
  return {
    type: 'name/update',
    payload: name
  }
}

// The reducer returns the next state of the application
function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    // If so, make a copy of `state`
    return {
      ...state, // { value: 0, name: ''}
      // and update the copy with the new value
      value: state.value + 1  // { value: 1, name: ''}
    }
  }
  else if (action.type === 'counter/reset') {
    return {
      ...state,
      value: 0
    }
  }
  else if (action.type === 'name/update') {
    return {
      ...state, // { value: 0, name: ''}
      // and update the copy with the new value
      name: action.payload
    }
  }

  // otherwise return the existing state unchanged
  return state
}

const store = configureStore({ reducer: counterReducer })

// store.dispatch({ type: 'name/update', payload: 'ben' })
store.dispatch(incrementCount());

export default store;