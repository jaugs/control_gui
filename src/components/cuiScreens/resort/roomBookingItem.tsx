import React, { ChangeEvent, useRef, useState } from 'react';
import '../../../styles/resortStyle.css'
import { addActiveRoom, addToActiveInventory, removeActiveInventory, toggleOrderForm, toggleRoomEdit } from '../../slices/interfaceSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import RoomBookingForm from './roomBookingForm';
import { BookingProps } from './roomInterface';

interface BookingItemProps {
  content: BookingProps;
  index: number;
  onEditClick: (index: number) => void;
}

const RoomBookingItem: React.FC<BookingItemProps> = ({content, index, onEditClick}) => {

    const dispatch = useAppDispatch()
  const [isEditing, setIsEditing] = useState(false);
  const interfaceData = useAppSelector((state) => state.interface)

 
  const openForm = () => {
    // if (interfaceData.roomEdit) {
    //   dispatch(addActiveRoom(content))
      
    // }
    // dispatch(toggleRoomEdit())
    // dispatch(addActiveRoom(content))
    onEditClick(index)
  }

  return (
    <div className={content.status == 'vacant' ? 'roomItemContainerVacant' : 'roomItemContainer'} >
        <div className='roomItemFields'>
        <div className='roomItem'>{`Room: ${content.roomNumber}`}</div>
        <div className='roomItem'>{content.status == 'vacant' ? 'Vacant' : content.status}</div>
        <div className='roomItem'>{content.status == 'vacant' ? <></> : content.checkOut_formatted}</div>
        <button onClick={() => openForm()} className='roomUpdateButton'>UPDATE</button>
        </div>
    </div>
  );
};

export default RoomBookingItem;
//className={isEditing ? content.status == 'vacant' ? 'roomItemExpandVacant' : 'roomItemExpand' : content.status == 'vacant' ? 'roomItemContainerVacant' : 'roomItemContainer'}