import { ReactNode } from "react";
import React from "react";

type WorkspaceProps = {
    onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    children?: ReactNode;
  };
  
  const Workspace: React.FC<WorkspaceProps> = ({ onDrop, onDragOver, children }) => {
    return (
      <div
        className="workspace"
        style={{
          position: 'relative',
        }}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {children}
      </div>
    );
  };

  export default Workspace