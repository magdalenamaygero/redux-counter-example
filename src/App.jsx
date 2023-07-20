// import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCount, updateName } from './store';


function App() {

  const dispatch = useDispatch(); // store.dispatch - issue a change to the state - uses an action
  const count = useSelector(state => state.value) // retrieve the current value of the state
  const name = useSelector(state => state.name)

  return (
    <>
      <h1>How many books?</h1>
      <div className="card">
        <button onClick={() => dispatch(incrementCount())}>
          count is {count}
        </button>
      </div>
      <h1>{name}</h1>
      <input onChange={(e) => dispatch(updateName(e.target.value))}></input>
    </>
  )
}

export default App
