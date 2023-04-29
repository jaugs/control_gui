import '../styles/popUp.css';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { close1, close2, close3, close4, startDragging1, stopDragging1, startDragging2, stopDragging2, 
          startDragging3, stopDragging3, startDragging4, stopDragging4, currentPopup} from './modalSlice';

interface ModalWindowProps {
  contents: React.ReactNode
  version: string
}

const Popup: React.FC<ModalWindowProps> = ({contents, version}) => {

  const number = useAppSelector((state) => state.modal.currentPopup)
  const isOpen1 = useAppSelector((state) => state.modal.isOpen1)
  const isOpen2 = useAppSelector((state) => state.modal.isOpen2)
  const isOpen3 = useAppSelector((state) => state.modal.isOpen3)
  const isOpen4 = useAppSelector((state) => state.modal.isOpen4)


  const coords = useAppSelector((state) => {
    if (version == '1') {
    return state.modal.coord1
    } else if (version == '2') {
      return state.modal.coord2
    } else if (version == '3') {
      return state.modal.coord3
    } else if (version == '4') {
      return state.modal.coord4
    } else return {x: '50', y:'50'}
  })

  const dispatch = useAppDispatch()
  
  const dragStart = () => {
      if (version == '1') {
        dispatch(currentPopup(1))
        dispatch(startDragging1())
      } else if (version == '2') {
        dispatch(currentPopup(2))
        dispatch(startDragging2())
        
      } else if (version == '3') {
        dispatch(currentPopup(3))
        dispatch(startDragging3())
      } else if (version == '4') {
        dispatch(currentPopup(4))
        dispatch(startDragging4())
      } else return null
  }

  const dragStop = () => {
    if (version == '1') {
      dispatch(stopDragging1())
    } else if (version == '2') {
      dispatch(stopDragging2())
    } else if (version == '3') {
      dispatch(stopDragging3())
    } else if (version == '4') {
      dispatch(stopDragging4())
    } else return null
  }

  const close = () => {
    if (version == '1') {
      dispatch(close1())
    } else if (version == '2') {
      dispatch(close2())
    } else if (version == '3') {
      dispatch(close3())
    } else if (version == '4') {
      dispatch(close4())
    } else return null
  }



  return (
    <div
      className= "popUp"
      draggable
      style={{
        position: 'absolute',
        top: coords.y,
        left: coords.x,
        cursor: 'move',
      }}
      onDragStart={dragStart}
      onDragEnd={dragStop}
      >
        <div className="popupHeader"> 
          <button className="popupClose" onClick={close}>&times;</button>
        
        </div>
        <div className="popupContent">
        {contents}
        </div>
    </div>
  );
};

export { Popup }