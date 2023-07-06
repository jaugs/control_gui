import React, { ChangeEvent, useRef, useState } from 'react';
import '../../../styles/resortStyle.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { BookingProps } from './roomInterface';

interface BookingItemProps {
  content: BookingProps;
  index: number;
  onEditClick: (index: number) => void;
}

const RoomBookingItem: React.FC<BookingItemProps> = ({content, index, onEditClick}) => {

  const openForm = () => {
    onEditClick(index)
  }

  return (
    <div className={content.status == 'vacant' ? 'roomItemContainerVacant' : 'roomItemContainer'} >
        <div className='roomItemFields'>
        <div className='roomItem'>{`Room: ${content.roomNumber}`}</div>
        <div className='roomItem'>{content.status == 'vacant' ? 'Vacant' : content.status == 'booked' ? 'Booked' : content.status == 'checkedIn' ? 'Checked In' : 'Vacant'}</div>
        <div className='roomItem'>{content.status == 'vacant' ? <></> : content.checkOut_formatted}</div>
        <button onClick={() => openForm()} className='roomUpdateButton'>EXPAND</button>
        </div>
    </div>
  );
};

export default RoomBookingItem;
