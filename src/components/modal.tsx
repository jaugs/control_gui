import { SetStateAction, useState } from 'react';
import '../styles/modalWindow.css';

interface ModalWindowProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalWindow: React.FC<ModalWindowProps> = ({isOpen, setIsOpen, title, onClose, children }) => {


  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`modal-window ${isOpen ? 'open' : ''}`}>
      <div className="modal-window-header">
        <div className="modal-window-title">{title}</div>
        <div className="modal-window-buttons">
          <button className="modal-window-minimize"></button>
          <button className="modal-window-maximize"></button>
          <button className="modal-window-close" onClick={handleClose}></button>
        </div>
      </div>
      <div className="modal-window-content">{children}</div>
    </div>
  );
};

export default ModalWindow;