import { ReactNode, useEffect, useRef, useState } from "react";
import React from "react";
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { changeCoords } from "./popupSlice";
import { changeMapCoords } from "./mapSlice";

type WorkspaceProps = {
  children?: ReactNode;
};
  
const Workspace: React.FC<WorkspaceProps> = ({children}) => {

  const dispatch = useAppDispatch()
  const PopupArr = useAppSelector((state) => state.popup.PopupArr)
  const map = useAppSelector((state) => state.map)

  const handleContainerDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let num = PopupArr.findIndex((item) => {return item.isDragging === true})
    console.log(event)
    let coords = {x : (event.screenX - 170), y: (event.clientY - 100)}
    if (map.isDragging === true) {
      dispatch(changeMapCoords({coords}))
    } else {
    dispatch(changeCoords({coords: coords, index: num}))
    }
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