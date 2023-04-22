import { useState } from 'react'
import './App.css'
import Startup from './components/startup'
import ModalWindow from './components/modal'
import Statusbar from './components/statusBar'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { decrement, increment } from './components/counterSlice'
import { changeScreen, selectScreen } from './components/mainSlice'
import Box from './components/box'
import Workspace from './components/container'
import CommWindow from './components/comms'
import ViewScreen from './components/viewScreen'

function App() {

//  const screen = useAppSelector((state) => state.main.screen)
  const screen = useAppSelector(selectScreen)
  
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 300, y: 300 });

  const handleClick = () => {
   console.log(screen)
  };

  const handleBoxDragStart = () => {
    setIsDragging(true);
  };

  const handleBoxDragEnd = () => {
    setIsDragging(false);
  };

  const handleContainerDrop = (event: React.DragEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX - 50, y: event.clientY - 100 });
  };

  const handleContainerDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

 

  return (

    <div className="container">
    <button onClick={handleClick}>rgregreg</button>
    <Statusbar />

    <Workspace onDrop={handleContainerDrop} onDragOver={handleContainerDragOver}>
      <div className='mainProgram'>
        {(() => {
          switch(screen) {
            case 'startup':
              return <Startup />
            case 'view':
              return <ViewScreen />
            default:
              return null
          }
        })()}
          
      </div>
      <ModalWindow 
        title="my modal2" 
        contents="dd" 
        x={position.x}
        y={position.y}
        onDragStart={handleBoxDragStart}
        onDragEnd={handleBoxDragEnd}
      />
      
      
    </Workspace>
      
    <div className='commContainer'>
        <CommWindow />
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
