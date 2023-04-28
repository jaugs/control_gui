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
import CommonInterface from './components/commonInterface'
import SetGrids from './components/setGrids'
import ElectricalMain from './components/elecMain'
import { Popup } from './components/popUp'

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

 
// onDrop={handleContainerDrop} onDragOver={handleContainerDragOver}
  return (

    <div className="container">
    <button onClick={handleClick}>rgregreg</button>
    <Statusbar />

    <Workspace>
      <div className='mainProgram'>
        {(() => {
          switch(screen) {
            case 'startup':
              return <Startup />
            case 'view':
              return <ViewScreen />
            case 'common':
              return <CommonInterface />
            case 'grid':
              return <SetGrids />
            case 'electrical':
              return <ElectricalMain />
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
      
        <Popup title='gsdasdfg' contents={<div>dfdddfd</div>} />
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
