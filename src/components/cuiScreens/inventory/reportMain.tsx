import React, { ChangeEvent, SetStateAction, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import '../../../styles/reportStyle.css'
import ItemOrderForm from './ItemOrderForm';
import InventoryTabs from './inventoryTabs';
import ReportingAccordion from './reportAccordion';
import { useGetPopup } from '../../getPopup';
import { removeActiveInventory, toggleClearFields, toggleConnoteFields, toggleReportEdit } from '../../slices/interfaceSlice';
import ReportEditFields from './reportEditFields';

interface ReportProps {
  editFields: any,
}

const ReportHeaders: React.FC<ReportProps> = ({editFields}) => {
  return (
    <div className='cuiReportColumnHeadingContainer'>
      {editFields.name ? <div className='cuiColumnHeader' id='orderHistoryHeader'>NAME:</div> : null}
      {editFields.category ? <div className='cuiColumnHeader'>CATEGORY:</div> : null}
      {editFields.sub_category ? <div className='cuiColumnHeader'>SUB-CATEGORY:</div> : null}
      {editFields.quantity ? <div className='cuiColumnHeader'>QUANTITY:</div> : null}
      {editFields.price ? <div className='cuiColumnHeader'>PRICE:</div> : null}
      {editFields.availability ? <div className='cuiColumnHeader'>AVAILABLILITY:</div> : null}
      {editFields.supplier ? <div className='cuiColumnHeader'>SUPPLIER:</div> : null}
      {editFields.lotSize ? <div className='cuiColumnHeader'>LOT-SIZE:</div> : null}
      {editFields.lastOrdered ? <div className='cuiColumnHeader'>LAST ORDERED:</div> : null}
      {editFields.orderHistory ? <div id='orderHistoryHeader' className='cuiColumnHeader'>ORDER HISTORY:</div> : null}
    </div>
  )
}

const ReportMain = () => {

  const getPopup = useGetPopup()
  const interfaceData = useAppSelector((state) => state.interface)
  const dispatch = useAppDispatch()
  const [newTitle, setnewTitle] = useState('NEW REPORT')
  const [newNotes, setNewNotes] = useState('')
  const [editFields, setEditFields] = useState(
    { name: true, 
      category: true, 
      sub_category: true,
      quantity: true,
      price: true,
      availability: true,
      supplier: true,
      lotSize: true,
      lastOrdered: true,
      orderHistory: true,
    })

  return (
  <div className='masterContainer'>
    <InventoryTabs />

    {interfaceData.reportOptions ? <div className='cuiReportOptionsContainer'>
      <div className='cuiReportOptionsTitle'>REPORT OPTIONS:</div>
      <div className='cuiReportOptions'>
        <button className='cuiReportOptionsButton' onClick={() => getPopup('PRINT')}>PRINT</button>
        <button className='cuiReportOptionsButton' onClick={() => getPopup('VISUAL')}>VISUALIZE</button>
        <button className='cuiReportOptionsButton' onClick={() => dispatch(toggleReportEdit())}>{interfaceData.reportEditFields ? 'GO BACK' : 'EDIT FIELDS'}</button>
        <button className='cuiReportOptionsButton' onClick={() => dispatch(toggleConnoteFields())}>{interfaceData.connoteFields ? 'GO BACK' : 'CONNOTE'}</button>
        <button className='cuiReportOptionsButton' onClick={() => dispatch(toggleClearFields())}>{interfaceData.clearFields ? 'GO BACK' : 'CLEAR FIELDS'}</button>
      </div>
      <ReportEditFields setEditFields= {setEditFields} editFields= {editFields} setNewTitle= {setnewTitle} setNewNotes={setNewNotes} newNotes={newNotes} />
      {interfaceData.clearFields ? 
        <div className='clearFieldsContainer'>
          {interfaceData.active_inventory.map((item: any, index: number) => {
           return <div key={index} className='clearFieldsItem'>{item.name}</div>
          })}
        </div> 
      : null}
    </div> : null}

    <div className='cuiReportContainer'>
    <div className='cuiReportTitle'>{newTitle}</div>
    <div className='cuiReportGrid'>
    {interfaceData.active_inventory.map((item: any, index: number) => {
      if (index % 3 == 0) {
        return (
          <React.Fragment key={index}>
          <ReportHeaders editFields={editFields}/>
          <ReportingAccordion content={item} editFields={editFields} />
          </React.Fragment>
          
        )}
        return <ReportingAccordion content={item} key={index} editFields={editFields}/>
    })}
    {newNotes == '' ? null : 
      <div className='reportNotesContainer'>
        <div className='reportNotesTitle'>NOTES:</div>
        <div className='reportNotes'>{newNotes}</div>
      </div>
    }
    </div>
  </div>
  </div>
  )
}
export default ReportMain