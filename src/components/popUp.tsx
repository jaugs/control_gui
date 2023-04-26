import '../styles/modalWindow.css';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { open1, close1, startDragging1, stopDragging1, setPosition1 } from './modalSlice';

interface ModalWindowProps {
  title: string;
  contents: React.ReactNode;
}

const ModalWindow1: React.FC<ModalWindowProps> = ({title, contents}) => {

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
        className="modal-window-header"
        onDragStart={(event) => dispatch(startDragging1())}
        onDragEnd={() => dispatch(stopDragging1())}>
          <div className="modal-window-title">{title}</div>
          <div className="modal-window-buttons">
            <button className="modal-window-minimize">-</button>
            <button className="modal-window-close" onClick={() => dispatch(close1())}>X</button>
          </div>
      </div>
      <div className="content">
        {contents}
      </div>
    </div>
  );
};

export { ModalWindow1 }