import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import '../../../styles/vehiclesMain.css'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useUpdateInventoryMutation,  } from '../../slices/apiSlice';
import { formatDate } from '../getDate';

interface EditFormProps {
  content: any,
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}
const InventoryEditForm: React.FC<EditFormProps> = ({content, setIsEditing}) => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  const [updateItem, response] = useUpdateInventoryMutation();

  const [editFields, setEditFields] = useState({
    category: content.category,
    sub_category: content.sub_category,
    quantity: content.quantity,
    price: content.price,
    description: content.description,
    isAvailable: content.isAvailable,
    supplier: content.supplier,
    lotSize: content.lotSize,
    lastOrdered: formatDate(content.lastOrdered_formatted),
    tags: content.tags
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setEditFields({...editFields, [event.target.name]: event.target.value})
  }

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    let bool = event.target.value
    if (bool === 'true') {
      setEditFields({...editFields, [event.target.name]: true})
      return
    }
    else if (bool === 'false') {
      setEditFields({...editFields, [event.target.name]: false})
      return
    }
  }

  async function handleSubmit (event: FormEvent<HTMLFormElement>)  {
    event.preventDefault()
    const serializedData = editFields;
    updateItem({id: content._id, ...serializedData}).unwrap().then((result) => {
      console.log(result);
      setIsEditing(false);
    })
  }

return (
  <div>
    <form className='inventoryForm' name='inventoryForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>
      <div className="cuiFormSection">
        <label>CATEGORY:</label>
            <input
              required
              type='text'
              placeholder='Category...'
              name='category'
              value={editFields.category}
              onChange={(event) => handleChange(event)}>
            </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>SUB-CATEGORY:</label>
        <input 
            type='text' 
            name='sub_category'  
            value={editFields.sub_category} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>DESCRIPTION:</label>
        <input 
            type='text' 
            name='description'  
            value={editFields.description} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>SUPPLIER:</label>
        <input 
            type='text' 
            name='supplier'  
            value={editFields.supplier} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>LOT SIZE:</label>
        <input 
            type='number' 
            name='lotSize'  
            value={editFields.lotSize} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>PRICE:</label>
        <input 
            type='number' 
            name='price'  
            value={editFields.price} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>AVAILABILITY:</label>
        <div className="cuiFormSubSection">
          <label className='cuiSubLabel'>IN STOCK
            <input 
              className='radioInput' 
              name='isAvailable' 
              type='radio' 
              value='true' 
              defaultChecked={editFields.isAvailable} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
          <label className='cuiSubLabel'>OUT OF STOCK
            <input 
              className='radioInput' 
              name='isAvailable' 
              type='radio' 
              value='false' 
              defaultChecked={!editFields.isAvailable} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
        </div>
      </div>
      <div className='cuiDropDownButtonContainer'>
        <button className='cuiDropDownButton' type='submit'>SUBMIT</button>
      </div>
    </form>
  </div>
)
}

export default InventoryEditForm