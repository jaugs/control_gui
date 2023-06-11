import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleAddForm } from '../../slices/interfaceSlice';
import { useAddInventoryItemMutation } from '../../slices/apiSlice';
import '../../../styles/inventoryMain.css'

const NewInventoryForm = () => {

  const [isSubmmited, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isSubmmited) {
    postData()
    }
  }, [isSubmmited])
  
  
  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  const [addItem, {isLoading: isUpdating}] = useAddInventoryItemMutation();
  const [newTags, setTags] = useState(['', '', ''])
  const [newItem, setNewItem] = useState({
      name: '',
      category: '',
      sub_category: '',
      price: 0,
      description: '',
      isAvailable: false,
      supplier: '',
      lotSize: 0,
      quantity: 0,
      tags: ['']
  });

  const handleTagChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    event.preventDefault()
    let temp = newTags.map((item:any) => item)
    temp[index] = event.target.value
    setTags(() => temp)
    setNewItem({...newItem, tags: newTags})
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      setNewItem({...newItem, [event.target.name]: event.target.value})
  }

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
      let bool = event.target.value
      if (bool === 'true') {
        setNewItem({...newItem, [event.target.name]: true})
          return
      }
      else if (bool === 'false') {
        setNewItem({...newItem, [event.target.name]: false})
          return
      }
  }

  async function postData () {
    addItem({...newItem}).unwrap().then((result) => {
        console.log(result)
         setIsSubmitted(false)
        dispatch(toggleAddForm())
    })

  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true)
  }

  return (
  <div>
    <form className='newInventoryForm' name='newInventoryForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>
        <div className="cuiFormSection">
        <label className='cuiLabel'>NAME:</label>
        <input 
            required
            type='text' 
            name='name'  
            placeholder='Name...'
            value={newItem.name} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>DESCRIPTION:</label>
        <input 
            type='text' 
            name='description'  
            placeholder='Description...'
            value={newItem.description} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label>CATEGORY:</label>
            <input
              required
              type='text'
              placeholder='Category...'
              name='category'
              value={newItem.category}
              onChange={(event) => handleChange(event)}>
            </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>SUPPLIER:</label>
        <input 
            type='text' 
            name='supplier'  
            placeholder='Supplier...'
            value={newItem.supplier} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>SUB-CATEGORY:</label>
        <input 
            type='text' 
            name='sub_category' 
            placeholder='Sub-Category...' 
            value={newItem.sub_category} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      
      <div className="cuiFormSection">
        <label className='cuiLabel'>PRICE:</label>
        <input 
            type='number' 
            name='price'
            placeholder='Price...'
            value={newItem.price} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>LOT SIZE:</label>
        <input
            required
            type='number' 
            name='lotSize'
            placeholder='Lot Size...'
            value={newItem.lotSize} 
            onChange={(event) => handleChange(event)}>
        </input>
      </div>
      <div className="cuiFormSection">
        <label className='cuiLabel'>TAGS:</label>
        <div className='tagContainer'>
        <input
            className='tagInput'
            type='text' 
            name='tag1'
            placeholder='Tag..'
            defaultValue={newTags[0]} 
            onBlur={(event) => handleTagChange(event, 0)}>
        </input>
        <input
            className='tagInput'
            type='text' 
            name='tag2'
            placeholder='Tag..'
            defaultValue={newTags[1]} 
            onBlur={(event) => handleTagChange(event, 1)}>
        </input>
        <input
            className='tagInput'
            type='text' 
            name='tag3'
            placeholder='Tag..'
            defaultValue={newTags[2]} 
            onBlur={(event) => handleTagChange(event, 2)}>
        </input>
        </div>
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
              defaultChecked={newItem.isAvailable} 
              onChange={(event) => handleRadioChange(event)}>
            </input>
          </label>
          <label className='cuiSubLabel'>OUT OF STOCK
            <input 
              className='radioInput' 
              name='isAvailable' 
              type='radio' 
              value='false' 
              defaultChecked={!newItem.isAvailable} 
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
export default NewInventoryForm