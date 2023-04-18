import React from 'react';

type BoxProps = {
    x: number;
    y: number;
    onDragStart: () => void;
    onDragEnd: () => void;
  };

  const Box: React.FC<BoxProps> = ({ x, y, onDragStart, onDragEnd }) => {
    return (
      <div
        draggable
        style={{
          position: 'absolute',
          top: y,
          left: x,
          width: '100px',
          height: '100px',
          backgroundColor: 'blue',
          cursor: 'move',
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      />
    );
  };

export default Box
