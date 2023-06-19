import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import '../../../styles/inventoryMain.css'
import ItemOrderForm from './ItemOrderForm';
import InventoryTabs from './inventoryTabs';
import ReportingAccordion from './reportAccordion';

const ReportMain = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const interfaceData = useAppSelector((state) => state.interface)

  return (
  <div className='cuiReportGrid'>
    <InventoryTabs />
    {interfaceData.active_inventory.map((item: any, index: number) => {
      return <ReportingAccordion content={item} key={index} />
    })}
    
  </div>
  )
}
export default ReportMain