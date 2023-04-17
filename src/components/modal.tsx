import '../styles/modalWindow.css';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { open, close } from './modalSlice';


interface ModalWindowProps {
  title: string;
  children: React.ReactNode;
}

const ModalWindow: React.FC<ModalWindowProps> = ({title, children}) => {

  const isOpen = useAppSelector((state) => state.modal.isOpen)
  const dispatch = useAppDispatch()


  return (
    <div className={`modal-window ${isOpen ? 'open' : 'close'}`}>
      <div className="modal-window-header">
        <div className="modal-window-title">{title}</div>
        <div className="modal-window-buttons">
          <button className="modal-window-minimize">-</button>
          <button className="modal-window-close" onClick={() => dispatch(close())}>X</button>
        </div>
      </div>
      <div className="modal-window-content">{children}</div>
    </div>
  );
};

export default ModalWindow;