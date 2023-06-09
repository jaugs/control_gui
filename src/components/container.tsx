import { ReactNode, useEffect, useRef, useState } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { changeCoords } from "./slices/popupSlice";
import { changeIntCoords } from "./slices/interfaceSlice";

type WorkspaceProps = {
  children?: ReactNode;
};
  
const Workspace: React.FC<WorkspaceProps> = ({children}) => {

  const dispatch = useAppDispatch()
  const PopupArr = useAppSelector((state) => state.popup.PopupArr)
  const intState = useAppSelector((state) => state.interface)

  const handleContainerDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (intState.isDragging) {
      let coords = {x : (event.clientX - 740), y: (event.clientY - 230)}
      dispatch(changeIntCoords({coords: coords}))
      return
    }
    let num = PopupArr.findIndex((item) => {return item.isDragging === true})
    console.log(event)
    let coords = {x : (event.clientX - 170), y: (event.clientY - 100)}
    dispatch(changeCoords({coords: coords, index: num}))
  } 
  
  return (
    <div
      className="workspace"
      style={{position: 'relative'}}
      onDrop={(event) => handleDrop(event)}
      onDragOver={(event) => handleContainerDragOver(event)}>
        {children}
    </div>
  );
};

export default Workspace