import './App.css'
import Startup from './components/startup'
import ModalWindow from './components/modal'
import Statusbar from './components/statusBar'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { changeScreen, selectScreen } from './components/mainSlice'
import Workspace from './components/container'
import CommWindow from './components/comms'
import ViewScreen from './components/viewScreen'
import CommonInterface from './components/commonInterface'
import SetGrids from './components/setGrids'
import ElectricalMain from './components/elecMain'
import { Popup } from './components/popUp'
import Messages from './components/messages'

function App() {

  const screen = useAppSelector(selectScreen)
  const dispatch = useAppDispatch()
  const popUpArr = useAppSelector((state) => state.popup.PopupArr)

  return (

    <div className="container">
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
    </Workspace>
    
    {popUpArr.map((item, index) => {
            return (item.isOpen ? 
              <Popup 
                version={index} 
                key={index} 
                contents={
                  <Messages 
                    contents={item.contents}/>} 
              /> 
              : null)
            })}
    <div className='commContainer'>
        <CommWindow />
      </div>
    
  </div>
  )
}

export default App
