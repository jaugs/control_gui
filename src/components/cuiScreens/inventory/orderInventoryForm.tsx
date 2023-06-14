import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleAddForm } from '../../slices/interfaceSlice';
import { useAddInventoryItemMutation } from '../../slices/apiSlice';
import '../../../styles/inventoryMain.css'



const OrderInventoryForm = () => {

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
  const getData = () => {
    console.log(interfaceData.active_inventory)
  }

  return (
  <div>
    <button onClick={getData}>eee</button>
    <form className='orderInventoryForm' name='orderInventoryForm' method='POST' onSubmit={(event) =>handleSubmit(event)}>
        <div className="cuiFormSection">
        <div className='cuiFormTitle'>Order Lot Size: 
            </div>
        <label className='cuiLabel'>Order:</label>
        <input 
            required
            type='date' 
            name='lastOrdered'  
            value={newItem.name} 
            onChange={(event) => handleChange(event)}>
        </input>
        </div>
      <div className='cuiDropDownButtonContainer'>
        <button className='cuiDropDownButton' type='submit'>SUBMIT</button>
      </div>
    </form>
  </div>
  )
}
export default OrderInventoryForm