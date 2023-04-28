import { ReactNode } from "react";
import React from "react";
import { handleContainerDrop1 } from "./modalSlice";
import { useAppDispatch, useAppSelector } from '../app/hooks'

type WorkspaceProps = {
    children?: ReactNode;
  };
  
const handleContainerDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.preventDefault();
};

const Workspace: React.FC<WorkspaceProps> = ({children}) => {

  const dispatch = useAppDispatch()

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let coords = {x : (event.clientX - 350), y: (event.clientY - 100)}
    dispatch(handleContainerDrop1({coords}))
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