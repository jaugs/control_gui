import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import '../../../styles/inventoryMain.css'
import { addToActiveInventory, removeActiveInventory, toggleOrderForm } from '../../slices/interfaceSlice';
import { useAppDispatch } from '../../../app/hooks';
import { useAddInventoryOrderMutation } from '../../slices/apiSlice';

interface OrderProps {
    content: any,
}

const ItemOrderForm: React.FC<OrderProps> = ({content}) => {

    const [isSubmmited, setIsSubmitted] = useState(false)

    useEffect(() => {
        if (isSubmmited) {
            postData()
        }
    }, [isSubmmited])
  
    const [orderItem, {isLoading: isUpdating}] = useAddInventoryOrderMutation()

    const dispatch = useAppDispatch()
    const [newOrderDate, setNewOrderDate] = useState('')
    const [newOrderQuantity, setNewOrderQuantity] = useState('')

    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setNewOrderDate(event.target.value)
        console.log(newOrderDate)
    }

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setNewOrderQuantity(event.target.value) 
        console.log(newOrderQuantity)

    }
    async function postData () {
        console.log(content)
        const newOrderHistory = [{date: newOrderDate, quantity: newOrderQuantity}]
        orderItem({id: content._id, orderHistory: newOrderHistory, lastOrdered: newOrderDate }).unwrap().then((result) => {
            console.log(result)
            dispatch(toggleOrderForm())
            dispatch(removeActiveInventory(content.name))
            setIsSubmitted(false)
            
        })
    }


const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true)
  }
  return (
    <form
          className='orderInventoryForm' 
          name='orderInventoryForm' 
          method='POST' 
          onSubmit={(event) =>handleSubmit(event)}>
            <label className='cuiFormTitle'>ORDER INVENTORY: {content.name}</label>
           
              <div className='cuiLabel'>Order Lot Size: {content.lotSize}</div>
              <div className='cuiLabel'>Current Balance: {content.quantity}</div>
              <div className='cuiLabel'>Last Ordered: {content.lastOrdered_formatted}</div>
              <div className="cuiFormSection">
              <label className='cuiLabel'>Order Date:</label>
              <input 
                  required
                  type='date' 
                  name='lastOrdered'  
                  value={newOrderDate} 
                  onChange={(event) => handleDateChange(event)}>
              </input>
            </div>
            <div className="cuiFormSection">
              <label className='cuiLabel'>Order Quantity:</label>
              <input 
                  required
                  type='number' 
                  name='orderquantity'  
                  value={newOrderQuantity} 
                  onChange={(event) => handleQuantityChange(event)}>
              </input>
            </div>
            <div className='cuiDropDownButtonContainer'>
              <button className='cuiDropDownButton' type='submit'>SUBMIT</button>
            </div>
        </form>
  );
};

export default ItemOrderForm;