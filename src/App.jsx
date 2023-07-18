// import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCount } from './store';

function App() {

  const dispatch = useDispatch();
  const count = useSelector(state => state.value)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(incrementCount())}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
