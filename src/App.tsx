import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Startup from './components/startup'
import ModalWindow from './components/modal'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { decrement, increment } from './components/counterSlice'


function App() {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

   

  return (
    <div className="App">
      
      
      <Startup />
      <ModalWindow 
        title="my modal2" 
        children="dd" 
      />

      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        
      </div>
    
    </div>
  )
}

export default App
