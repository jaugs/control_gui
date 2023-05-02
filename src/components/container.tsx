import { ReactNode, useEffect, useRef, useState } from "react";
import React from "react";
import { handleContainerDrop1, handleContainerDrop2, handleContainerDrop3, handleContainerDrop4  } from "./modalSlice";
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { changeCoords } from "./popupSlice";

type WorkspaceProps = {
  children?: ReactNode;
};
  
const Workspace: React.FC<WorkspaceProps> = ({children}) => {

  const PopupArr = useAppSelector((state) => state.popup.PopupArr)
  const [activeIndex, setactiveIndex] = useState(0)


  // useEffect(() => {
  //   let num = PopupArr.findIndex((item) => {item.isDragging})
  //   setactiveIndex(num)

  // },[PopupArr])

   const number = useAppSelector((state) => state.modal.currentPopup)

   const handleContainerDragOver = (event: React.DragEvent<HTMLDivElement>) => {
   
    event.preventDefault();
  };

  const dispatch = useAppDispatch()

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    
    let num = PopupArr.findIndex((item) => {item.isDragging === true})
    //setactiveIndex(num)
    let draggable = document.querySelector('.draggable');
    console.log(num)
    let coords = {x : (event.clientX - 150), y: (event.clientY - 150)}
    dispatch(changeCoords({coords: coords, index: 1}))
   
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