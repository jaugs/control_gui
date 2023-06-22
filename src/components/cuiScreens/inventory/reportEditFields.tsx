import React, { ChangeEvent, SetStateAction, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import '../../../styles/reportStyle.css'
import { toggleConnoteFields } from '../../slices/interfaceSlice';

interface ReportProps {
    editFields: any,
    setEditFields: React.Dispatch<React.SetStateAction<any>>,
    setNewTitle: React.Dispatch<React.SetStateAction<any>>,
    setNewNotes: React.Dispatch<React.SetStateAction<any>>,
    newNotes: string,
}

const ReportEditFields: React.FC<ReportProps> = ({editFields, setEditFields, setNewTitle, setNewNotes, newNotes}) => {

    const interfaceData = useAppSelector((state) => state.interface)
    const dispatch = useAppDispatch()
    const [toggleTitleField, setToggleTitleField] = useState(false)
    const [toggleNotesField, setToggleNotesField] = useState(false)
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = event.target
      if (checked) {
        setEditFields({...editFields, [event.target.name]: false})
      } else if (!checked){
        setEditFields({...editFields, [event.target.name]: true})
          }
     
      }
  
    const handleReportTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setNewTitle(event.target.value)
    }

    const handleReportNotesChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      event.preventDefault()
      setNewNotes(event.target.value)
    }

    const handleTitleSubmit = () => {
      setToggleTitleField(!toggleTitleField)
    }

    const handleNotesSubmit = () => {
      setToggleNotesField(!toggleNotesField)
    }

    
  return (
    <div className='cuiReportEditOptionsContainer'>
      {interfaceData.reportEditFields ? <div className='cuiReportEditFieldsContainer'>
        <label className='cuiReportLabel'>NAME
        <input
          name='name'
          className='reportCheckInput'
          type='checkbox'
          onChange={(event) => handleCheckboxChange(event)}>
        </input>
        </label>
        <label className='cuiReportLabel'>CATEGORY
        <input
          name='category'
          className='reportCheckInput'
          type='checkbox'
          onChange={(event) => handleCheckboxChange(event)}>
        </input>
        </label>
        <label className='cuiReportLabel'>SUB-CATEGORY
        <input
          name='sub_category'
          className='reportCheckInput'
          type='checkbox'
          onChange={(event) => handleCheckboxChange(event)}>
        </input>
        </label>
        <label className='cuiReportLabel'>QUANTITY
        <input
          name='quantity'
          className='reportCheckInput'
          type='checkbox'
          onChange={(event) => handleCheckboxChange(event)}>
        </input>
        </label>
        <label className='cuiReportLabel'>PRICE
        <input
          name='price'
          className='reportCheckInput'
          type='checkbox'
          onChange={(event) => handleCheckboxChange(event)}>
        </input>
        </label>
        <label className='cuiReportLabel'>AVAILABILITY
        <input
          name='availability'
          className='reportCheckInput'
          type='checkbox'
          onChange={(event) => handleCheckboxChange(event)}>
        </input>
        </label>
        <label className='cuiReportLabel'>SUPPLIER
        <input
          name='supplier'
          className='reportCheckInput'
          type='checkbox'
          onChange={(event) => handleCheckboxChange(event)}>
        </input>
        </label>
        <label className='cuiReportLabel'>LOT-SIZE
        <input
          name='lotSize'
          className='reportCheckInput'
          type='checkbox'
          onChange={(event) => handleCheckboxChange(event)}>
        </input>
        </label>
        <label className='cuiReportLabel'>LAST ORDERED
        <input
          name='lastOrdered'
          className='reportCheckInput'
          type='checkbox'
          onChange={(event) => handleCheckboxChange(event)}>
        </input>
        </label>
        <label className='cuiReportLabel'>ORDER HISTORY
        <input
          name='orderHistory'
          className='reportCheckInput'
          type='checkbox'
          onChange={(event) => handleCheckboxChange(event)}>
        </input>
        </label>
      </div> : null} 
      {interfaceData.connoteFields ? <div className='cuiReportEditFieldsContainer'>
        <label className='cuiConnoteLabel'>TITLE
          {toggleTitleField ? 
            <input
              type='text'
              className='cuiReportTextInput'
              name='reportTitle'
              onChange={(event) => handleReportTitleChange(event)}>
            </input>: 
          null}
          <button className='cuiReportEditButton' onClick={handleTitleSubmit}>{toggleTitleField ? 'SUBMIT' : 'EDIT'}</button>
        </label>
        <label className='cuiConnoteLabel'>NOTES
          {toggleNotesField ?
            <textarea
              rows={3}
              cols={34}
              value={newNotes}
              className='cuiReportTextInput'
              name='reportNotes'
              onChange={(event) => handleReportNotesChange(event)}>
            </textarea>:
          null}
          <button className='cuiReportEditButton' onClick={handleNotesSubmit}>{toggleNotesField ? 'SUBMIT' : 'EDIT'}</button>
        </label>
      </div> : null}
    </div>
  
    )
  }

export default ReportEditFields