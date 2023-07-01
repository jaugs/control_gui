import React, { ChangeEvent, useState } from 'react';
import '../../../styles/resortStyle.css'
import { addToActiveInventory, removeActiveInventory, toggleOrderForm } from '../../slices/interfaceSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import RoomBookingForm from './roomBookingForm';

interface RoomProps {
    content: any,
}

const RoomBookingItem: React.FC<RoomProps> = ({content}) => {

    const dispatch = useAppDispatch()
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const interfaceData = useAppSelector((state) => state.interface)

  const openForm = () => {
    setIsEditing(!isEditing)
  }


  return (
    <div className={content.status == 'vacant' ? 'roomItemContainerVacant' : 'roomItemContainer'}>
        <div className='roomItemFields'>
        <div className='roomItem'>Room: {content.roomNumber}</div>
        <div className='roomItem'>{content.status == 'vacant' ? 'Vacant' : content.status}</div>
        <div className='roomItem'>{content.status == 'vacant' ? <></> : content.checkOut_formatted}</div>
        <button onClick={() => openForm()} className='roomUpdateButton'>{isEditing ? 'GO BACK' : 'EXPAND'}</button>
        </div>
        {isEditing ? <RoomBookingForm content={content} setIsEditing={setIsEditing}/> : null}
    </div>
  );
};

export default RoomBookingItem;