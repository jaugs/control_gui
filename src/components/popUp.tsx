import '../styles/popUp.css';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { open1, close1, startDragging1, stopDragging1, setPosition1 } from './modalSlice';

interface ModalWindowProps {
  title: string;
  contents: React.ReactNode;
}

const Popup: React.FC<ModalWindowProps> = ({title, contents}) => {

  const isOpen = useAppSelector((state) => state.modal.isOpen1)
  const coords = useAppSelector((state) => state.modal.coord1)
  const isDraggin = useAppSelector((state) => state.modal.IsDragging1)
  const dispatch = useAppDispatch()


  return (
    <div 
      className='popUp'
      draggable
      style={{
        position: 'absolute',
        top: coords.y,
        left: coords.x,
        cursor: 'move',
      }}
      >
      <div 
        className="popupHeader"
        onDragStart={(event) => dispatch(startDragging1())}
        onDragEnd={() => dispatch(stopDragging1())}>
         
            <button className="popupClose" onClick={() => dispatch(close1())}>&times;</button>
        
      </div>
      <div className="popupContent">
        {contents}
      </div>
    </div>
  );
};

export { Popup }