import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import '../../../styles/inventoryMain.css'
import ItemOrderForm from './ItemOrderForm';

const OrderInventoryForm = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const interfaceData = useAppSelector((state) => state.interface)

  return (
  <div>
    {interfaceData.active_inventory.map((item: any, index: number) => {
      return <ItemOrderForm content={item} key={index} />
    })}
    
  </div>
  )
}
export default OrderInventoryForm