import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleAddForm } from '../../slices/interfaceSlice';
import { useAddInventoryItemMutation } from '../../slices/apiSlice';
import '../../../styles/inventoryMain.css'
import ItemOrderForm from './ItemOrderForm';



const OrderInventoryForm = () => {

 
  
  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()
  const interfaceData = useAppSelector((state) => state.interface)
  
  

  // const handleTagChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
  //   event.preventDefault()
  //   let temp = newTags.map((item:any) => item)
  //   temp[index] = event.target.value
  //   setTags(() => temp)
  //   setNewItem({...newItem, tags: newTags})
  // }

 

  // const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     let bool = event.target.value
  //     if (bool === 'true') {
  //       setNewItem({...newItem, [event.target.name]: true})
  //         return
  //     }
  //     else if (bool === 'false') {
  //       setNewItem({...newItem, [event.target.name]: false})
  //         return
  //     }
  // }


  const getData = () => {
    console.log(interfaceData.active_inventory)
  }

  return (
  <div>
    {interfaceData.active_inventory.map((item: any, index: number) => {
      return <ItemOrderForm content={item} key={index} />
    })}
    
  </div>
  )
}
export default OrderInventoryForm