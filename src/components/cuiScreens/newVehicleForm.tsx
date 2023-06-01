import '../../styles/vehiclesMain.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useEffect, useState, ChangeEvent, FormEvent, ComponentState } from 'react';
import { changeSection, toggleAddForm } from '../slices/interfaceSlice';
import { useAddVehicleMutation, useGetVehicleListQuery, useUpdateVehicleMutation  } from '../slices/apiSlice';

interface FormProps {
  getBadges(make: string): string;
}

const NewVehicleForm: React.FC<FormProps> = (props) => {

  const [isSubmmited, setIsSubmitted] = useState(false)
  useEffect(() => {
    if (isSubmmited) {
    postData()
    }
  }, [isSubmmited])
  
    const formatDate = (userDate:any) => {
        userDate = new Date(userDate);
        let y = userDate.getFullYear().toString();
        let m = userDate.getMonth() + 1;
        m= (('0' + m.toString()).slice(-2))
        let d =(('0' + userDate.getDate().toString()).slice(-2));
        let result = `${y}-${m}-${d}`
        return result
    }
  
    const popUpArr = useAppSelector((state) => state.popup.PopupArr)
    const dispatch = useAppDispatch()
    const interfaceData = useAppSelector((state) => state.interface)
    const [addVehicle, {isLoading: isUpdating}] = useAddVehicleMutation();

    const [newVehicle, setNewVehicle] = useState({
        make: '',
        badge: '',
        useStatus: false,
        maintenanceStatus: false,
        milage: '',
        service_history: [{service_type: '', service_date: '', service_notes: ''},],
        next_service: '',
    });

    const handleMakeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewVehicle({...newVehicle, [event.target.name]: event.target.value})
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setNewVehicle({...newVehicle, [event.target.name]: event.target.value})
    }

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        let bool = event.target.value
        console.log(bool)
        if (bool === 'true') {
            setNewVehicle({...newVehicle, maintenanceStatus: true})
            return
        }
        else if (bool === 'false') {
            setNewVehicle({...newVehicle, maintenanceStatus: false})
            return
        }
    }

    function getBadge () {
      let number = props.getBadges(newVehicle.make)
      console.log(number)
      setNewVehicle((prevState) => ({...prevState, badge: number}))
      console.log(newVehicle)
    }

    async function postData () {
        try { 
            await addVehicle({...newVehicle}).then(res => {console.log(res)})
            }
            catch {
                error: console.log(Error)
            }
            finally {
                setIsSubmitted(false)
                dispatch(toggleAddForm())
            }
    }

    const handleNewVehicleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      getBadge()
      setIsSubmitted(true)
     // vehicle.refetch()
    }



  return (
  <div className='newVehicleForm'>
    <form name='addVehicle' method='POST' onSubmit={(event) => handleNewVehicleSubmit(event)}>
      <label>VEHICLE MAKE:
        <label>JEEP</label>
        <input
          className='radioInput' 
          type='radio'
          name='make'
          value='Jeep'
          onChange={(event) => handleMakeChange(event)}>
        </input>
        <label>LAND CRUISER</label>
        <input
          className='radioInput' 
          type='radio'
          name='make'
          value='Land Cruiser'
          onChange={(event) => handleMakeChange(event)}>
        </input>
        <label>UTILITY TRUCK</label>
        <input
          className='radioInput' 
          type='radio'
          name='make'
          value='Utility'
          onChange={(event) => handleMakeChange(event)}>
        </input>
      </label>

      <label className='radioLabel'>USE STATUS:
        <label>IN USE</label>
          <input 
            className='radioInput' 
            name='useStatus' 
            type='radio' 
            value='true' 
            defaultChecked={newVehicle.useStatus} 
            onChange={(event) => handleRadioChange(event)}>
          </input>
        <label>IN GARAGE</label>
          <input 
            className='radioInput' 
            name='useStatus' 
            type='radio' 
            value='false' 
            defaultChecked={!newVehicle.useStatus} 
            onChange={(event) => handleRadioChange(event)}>
          </input>
      </label>

      <label className='radioLabel'>OPERATIONAL STATUS:
        <label>FUNCTIONAL</label>
          <input 
            className='radioInput' 
            name='maintenanceStatus' 
            type='radio' 
            value='true' 
            defaultChecked={newVehicle.maintenanceStatus} 
            onChange={(event) => handleRadioChange(event)}>
          </input>
        <label>IN MAINTENANCE</label>
          <input 
            className='radioInput' 
            name='maintenanceStatus' 
            type='radio' 
            value='false' 
            defaultChecked={!newVehicle.maintenanceStatus} 
            onChange={(event) => handleRadioChange(event)}>
          </input>
      </label>

      <label>MILAGE:</label>
      <input 
          type='number' 
          placeholder = '0'
          name='milage'  
          value={newVehicle.milage} 
          onChange={(event) => handleChange(event)}>
      </input>

      <label>NEXT SERVICE:</label>
      <input 
          type='date' 
          name='next_service'  
          value={newVehicle.next_service} 
          onChange={(event) => handleChange(event)}>
      </input>

      <button type='submit'>SUBMIT</button>
    </form>
  </div>
  )
}

export default NewVehicleForm