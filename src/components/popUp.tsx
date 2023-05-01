import '../styles/popUp.css';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { changeOpen, changeCoords, changeDragging } from './popupSlice';
import { ReactNode } from 'react';

interface ModalWindowProps {
  version: number
  contents: ReactNode
}

const Popup: React.FC<ModalWindowProps> = ({version, contents}) => {


  const dispatch = useAppDispatch()
  const popUp = useAppSelector((state) => state.popup.PopupArr[version])
  
  return (
    <div
      className= "popUp"
      draggable
      style={{
        position: 'absolute',
        top: popUp.coords.y,
        left: popUp.coords.x,
        cursor: 'move',
      }}
      onDragStart={() => dispatch(changeDragging(version))}
      onDragEnd={() => dispatch(changeDragging(version))}
      >
        <div className="popupHeader"> 
          <button className="popupClose" onClick={() => dispatch(changeOpen(version))}>&times;</button>
        
        </div>
        <div className="popupContent">
        {contents}
        </div>
    </div>
  );
};

export { Popup }