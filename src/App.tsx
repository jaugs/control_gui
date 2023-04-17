import { useState } from 'react'
import './App.css'
import Startup from './components/startup'
import ModalWindow from './components/modal'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { decrement, increment } from './components/counterSlice'
import Statusbar from './components/statusBar'


function App() {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  
  


  return (
    <div className="container">
      
    <Statusbar />
      <div className='workspace'>
        
         
            <ModalWindow 
              title="my modal2" 
              children="dd" 
            />
        
      
       
        <Startup />
      </div>
      <div className='commContainer'>
        <p>Active Comms:</p>
        <p>Contact</p>
        <p>Transmit</p>
      </div>
      

      {/* <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
      </div> */}
    
    </div>
  )
}

export default App
