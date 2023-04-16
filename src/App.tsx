import { useState } from 'react'
import Draggable from 'react-draggable'
import './App.css'
import Startup from './components/startup'
import ModalWindow from './components/modal'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { decrement, increment } from './components/counterSlice'
import Statusbar from './components/statusBar'


function App() {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  
  type DraggableEventHandler = (e: Event, data: DraggableData) => void | false;
  type DraggableData = {
    node: HTMLElement,
    // lastX + deltaX === x
    x: number, y: number,
    deltaX: number, deltaY: number,
    lastX: number, lastY: number
  };
   

  return (
    <div className="container">
      
    <Statusbar />
    
      <Draggable
        grid={[50, 50]}
        defaultPosition={{x: 50, y: 250}}        >
      <div>
      <ModalWindow 
        title="my modal2" 
        children="dd" 
      />
      </div>
    </Draggable>
      
      <Startup />
      
    <div className='commContainer'>
      <p>Active Comms:</p>
      <p>Contact</p>
      <p>Transmit</p>
    </div>
      

      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
      </div>
    
    </div>
  )
}

export default App
