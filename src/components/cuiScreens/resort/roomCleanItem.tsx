import React, { ChangeEvent, useState } from 'react';
import '../../../styles/resortStyle.css'
import RoomCleaningForm from './roomEdit';

interface RoomProps {
    content: any,
}

const RoomCleanItem: React.FC<RoomProps> = ({content}) => {

  const [isEditing, setIsEditing] = useState(false);

  const openForm = () => {
    setIsEditing(!isEditing)
  }


  return (
    <div className={isEditing ? 'roomCleanContainerExpand' : content.status == 'vacant' ? 'roomCleanContainerVacant' : 'roomCleanContainer'}>
        <div className='roomCleaningFields'>
        <div className='roomItem'>Room: {content.roomNumber}</div>
        <div className='roomItem'>Last Cleaned:</div>
        <div className='roomItem'>{content.lastCleaned_formatted}</div>
        <button onClick={() => openForm()} className='roomUpdateButton'>{isEditing ? 'GO BACK' : 'UPDATE'}</button>
        </div>
        {isEditing ? <RoomCleaningForm content={content} setIsEditing={setIsEditing}/> : null}
    </div>
  );
};

export default RoomCleanItem;