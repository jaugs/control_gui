import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../../slices/popupSlice';
import { changeSection, toggleAddForm, closeActiveObjectIndex, openActiveObjectIndex, selectInterface } from '../../slices/interfaceSlice';
import { useGetRideListQuery } from '../../slices/apiSlice';
import NewRideForm from './ridesNewForm';
import RidesAccordion from './rideAccordion';

const RidesMain: React.FC = () => {

  const dispatch = useAppDispatch()
  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const interfaceData = useAppSelector((state) => state.interface)
  const { data, error, isLoading } = useGetRideListQuery()

  
  const addVehicle = () => {
    console.log(data)
    console.log(interfaceData.active_object_index)
  }

  return (
    <div className="masterContainer">
      <header className='masterHeader'> 
        <button className='cuiHeaderButton'>FIND</button>
        <button className='cuiHeaderButton' onClick={() => dispatch(toggleAddForm())}>ORDER</button>
        <button className='cuiHeaderButton'>MONITOR</button>
        <button className='cuiHeaderButton'>DELETE</button>
        <button className='cuiHeaderButton'>REPORT</button>
        <button className='cuiHeaderButton' onClick={() => addVehicle()}>OPTIONS</button>
        <button className='cuiHeaderButton' onClick={() => dispatch(changeSection('MAINTENANCE'))}>GO BACK</button>
      </header>
      <section className='vehicleGrid'>
        {interfaceData.addFormOpen?  <NewRideForm /> : null}
      
        {isLoading ? <div>Loading...</div> : error ? <div>Error: 102</div> : data ? data.map((item: any, index: number) => {
          return <RidesAccordion key={item._id} title={item.name} content={item} />
        }) : null }
      </section>
    </div>
  )
}

export default RidesMain