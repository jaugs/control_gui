import { ReactNode, useRef } from "react";
import React from "react";
import { handleContainerDrop1, handleContainerDrop2, handleContainerDrop3, handleContainerDrop4  } from "./modalSlice";
import { useAppDispatch, useAppSelector } from '../app/hooks'

type WorkspaceProps = {
    children?: ReactNode;
  };
  


const Workspace: React.FC<WorkspaceProps> = ({children}) => {

   const number = useAppSelector((state) => state.modal.currentPopup)

   const handleContainerDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
   
  };

  const dispatch = useAppDispatch()

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let coords = {x : (event.clientX - 150), y: (event.clientY - 150)}
    if (number == 1) {
    dispatch(handleContainerDrop1({coords}))
    } else if (number == 2) {
      dispatch(handleContainerDrop2({coords}))
    } else if (number == 3) {
      dispatch(handleContainerDrop3({coords}))
    } else if (number == 4) {
      dispatch(handleContainerDrop4({coords}))
    }
  }
  return (
    <div
      className="workspace"
      style={{position: 'relative'}}
      onDrop={(event) => handleDrop(event)}
      onDragOver={handleContainerDragOver}>
        {children}
    </div>
  );
};

export default Workspace