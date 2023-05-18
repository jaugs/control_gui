import '../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { changeScreen } from '../components/slices/mainSlice'
import { newPopup, changeOpen, changeContent } from '../components/slices/popupSlice'
import { toggleMap } from '../components/slices/mapSlice';
import { toggleCui, toggleMinimize, changeIntDragging } from './slices/interfaceSlice';
import MasterMain from './cuiScreens/masterMain';

const Cui: React.FC = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const intState = useAppSelector((state) => state.interface)

  const isMinimized = useAppSelector((state) => state.interface.isMinimized)
  const minimizeCui = () => {
    dispatch((toggleMinimize()))
  }

  const dragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault
    dispatch(changeIntDragging())
  }

  const getPopup = (word: string) => {
    let num = popUpArr.findIndex((item) => {return !item.isOpen})
    if (popUpArr.length > 5 && num === -1 ) {
      return
    }
    if (num === -1) {
      dispatch(newPopup({isOpen: true, coords: {x:50, y:50}, isDragging: false, contents: word}))
    } else {
    dispatch(changeOpen(num))
    dispatch(changeContent({contents: word, index: num}))
    }
  }

  return (
    <div 
      className="cuiWindow"
      draggable
      style={{position: 'absolute',
              top: intState.coords.y,
              left: intState.coords.x,
              
      }}
      onDragStart={() => dispatch(changeIntDragging())}
      onDragEnd={(event) => dragEnd(event)}>

        <header className={isMinimized ? 'miniHeader' : 'cuiHeader'}>
          <div className='cuiTitle'>COMMON USER INTERFACE: {intState.section}</div>
          <div className='cuiHeaderRow'>
            <button className='cuiButton' onClick={() => minimizeCui()}>-</button>
            <button className='cuiButton' onClick={() => dispatch(toggleCui())}>&times;</button>
        </div>
        </header>

        <section className='cuiSection'>
        {(() => {
          switch(intState.section) {
            case 'MASTER':
              return <MasterMain />
            case 'view':
              return <MasterMain />
            default:
              return null
          }
        })()}   
        </section>
    </div>
  )
}
export default Cui
