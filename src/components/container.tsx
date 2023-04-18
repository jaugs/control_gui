import { ReactNode } from "react";
import React from "react";

type ContainerProps = {
    onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    children?: ReactNode;
  };
  
  const Container: React.FC<ContainerProps> = ({ onDrop, onDragOver, children }) => {
    return (
      <div
        style={{
          position: 'relative',
          width: '300px',
          height: '300px',
          border: '1px solid black',
        }}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {children}
      </div>
    );
  };

  export default Container