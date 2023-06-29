import '../../../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeScreen } from '../../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { useEffect, useState } from 'react';
import { changeID, changeSection } from '../../slices/interfaceSlice';
import ResortTabs from './resortTabs';
import { useGetResortListQuery } from '../../slices/apiSlice';

const ResortMain: React.FC = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const {data, error, isLoading } = useGetResortListQuery()


  return (
    <div className="masterContainer">

        <ResortTabs />
        
        <section className='maintenanceGrid'>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('CLEANING'))}>Cleaning
                <ul>
                  <li className='listItem'>Records</li>
                  <li className='listItem'>Supplies</li>
                  <li className='listItem'>Personnel</li>
                </ul>
            </div>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('BOOKING'))}>Booking
                <ul>
                  <li className='listItem'>Schedule</li>
                  <li className='listItem'>Status</li>
                </ul>
            </div>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('DINING'))}>Dining
                <ul>
                    <li className='listItem'>Equiptment</li>
                    <li className='listItem'>Supplies</li>
                    <li className='listItem'>Personnel</li>
                </ul> 
            </div>
            <div 
              className='cuiLink'
              onClick={() => dispatch(changeSection('POOL'))}>Pool
                <ul>
                  <li className='listItem'>Maintenance</li>
                  <li className='listItem'>Supplies</li>
                </ul>  
            </div>
        </section>
    </div>
  )
}

export default ResortMain