import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import '../../../styles/reportStyle.css'
import ItemOrderForm from './ItemOrderForm';
import InventoryTabs from './inventoryTabs';
import ReportingAccordion from './reportAccordion';
import { useGetPopup } from '../../getPopup';
import { toggleReportEdit } from '../../slices/interfaceSlice';

const ReportHeaders = () => {
  return (
    <div className='cuiReportColumnHeadingContainer'>
      <div className='cuiColumnHeader'>NAME:</div>
      <div className='cuiColumnHeader'>CATEGORY:</div>
      <div className='cuiColumnHeader'>SUB-CATEGORY:</div>
      <div className='cuiColumnHeader'>QUANTITY:</div>
      <div className='cuiColumnHeader'>PRICE:</div>
      <div className='cuiColumnHeader'>AVAILABLILITY:</div>
      <div className='cuiColumnHeader'>SUPPLIER:</div>
      <div className='cuiColumnHeader'>LOT-SIZE:</div>
      <div className='cuiColumnHeader'>LAST ORDERED:</div>
      <div className='cuiColumnHeader' id='orderHistoryHeader'>ORDER HISTORY:</div>
    </div>
  )
}

const ReportEditFields = () => {

  const interfaceData = useAppSelector((state) => state.interface)
  const dispatch = useAppDispatch()

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target
    if (checked) {
      //  if (//interfaceData.active_inventory.some((item: any) => item._id === content.id)) {
            return
        } else {
            //dispatch(addToActiveInventory(content))
        }
   // } else {
       // dispatch(removeActiveInventory(content.name))
      //  if (interfaceData.active_inventory.length < 2) {
            //dispatch(toggleOrderForm())
       // }
    //}
    }

    return (
    <div className='cuiReportEditFieldsContainer'>
      <label className='cuiInputLabel'>NAME
      <input
        className='checkInput'
        type='checkbox'
        // checked={interfaceData.active_inventory.some((item: any) => item._id === content.id)}
        onChange={(event) => handleCheckboxChange(event)}>
      </input>
      </label>
      <label className='cuiInputLabel'>CATEGORY</label>
      <input
        className='checkInput'
        type='checkbox'
        // checked={interfaceData.active_inventory.some((item: any) => item._id === content.id)}
        onChange={(event) => handleCheckboxChange(event)}>
      </input>
  </div>

  )
}

const ReportMain = () => {

  const getPopup = useGetPopup()
  const interfaceData = useAppSelector((state) => state.interface)
  const dispatch = useAppDispatch()

  return (
  <div className='masterContainer'>
    <InventoryTabs />

    <div className='cuiReportOptionsContainer'>
      <div className='cuiReportOptionsTitle'>REPORT OPTIONS:</div>
      <div className='cuiReportOptions'>
        <button className='cuiReportOptionsButton' onClick={() => getPopup('PRINT')}>PRINT</button>
        <button className='cuiReportOptionsButton' onClick={() => dispatch(toggleReportEdit())}>EDIT FIELDS</button>
        <button className='cuiReportOptionsButton'>VISUALIZE</button>
        <button className='cuiReportOptionsButton'>CONNOTE</button>
        {interfaceData.reportEditFields ? <ReportEditFields /> : null}
      </div>
    </div>

    <div className='cuiReportContainer'>
    <div className='cuiReportGrid'>
    {interfaceData.active_inventory.map((item: any, index: number) => {
      if (index % 3 == 0) {
        return (
          <React.Fragment key={index}>
          <ReportHeaders />
          <ReportingAccordion content={item} />
          </React.Fragment>
          
        )}
        return <ReportingAccordion content={item} key={index} />
    })}
    </div>
  </div>
  </div>
  )
}
export default ReportMain