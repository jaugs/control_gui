import '../styles/modalWindow.css';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { open, close } from './modalSlice';
import map from '../assets/nublarresized.png'

interface MapWindowProps {
  title: string;
  contents: React.ReactNode;
  x: number;
  y: number;
  onDragStart: () => void
  onDragEnd: () => void;
}

const ModalWindow: React.FC<MapWindowProps> = ({title, contents, x, y, onDragStart, onDragEnd}) => {

  const isOpen = useAppSelector((state) => state.modal.isOpen)
  const dispatch = useAppDispatch()


  return (
    <div 
      className={`map-window ${isOpen ? 'open' : 'close'}`}
      draggable
      style={{
        position: 'absolute',
        top: y,
        left: x,
        cursor: 'move',
      }}
      >
      <div 
        className="modal-window-header"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}>
          <div className="modal-window-title">{title}</div>
          <div className="modal-window-buttons">
            <button className="modal-window-minimize">-</button>
            <button className="modal-window-close" onClick={() => dispatch(close())}>X</button>
          </div>
      </div>
      <div className="modal-window-content">
        <img className='map' src={map}></img>
      </div>
    </div>
  );
};

export default ModalWindow;