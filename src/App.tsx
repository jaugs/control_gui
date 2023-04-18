import { useState } from 'react'
import './App.css'
import Startup from './components/startup'
import ModalWindow from './components/modal'
import Statusbar from './components/statusBar'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { decrement, increment } from './components/counterSlice'
import Box from './components/box'
import Container from './components/container'


function App() {

  
  
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleBoxDragStart = () => {
    setIsDragging(true);
  };

  const handleBoxDragEnd = () => {
    setIsDragging(false);
  };

  const handleContainerDrop = (event: React.DragEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX - 50, y: event.clientY - 50 });
  };

  const handleContainerDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

 

  return (


    <div className="container">
      

    <Statusbar />


      <div className='workspace'>

      <Container onDrop={handleContainerDrop} onDragOver={handleContainerDragOver}>
      <Box
        x={position.x}
        y={position.y}
        onDragStart={handleBoxDragStart}
        onDragEnd={handleBoxDragEnd}
      />
    </Container>
      
            <ModalWindow 
              title="my modal2" 
              contents="dd" 
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
