import '../styles/commonInterface.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
//import { open1, close } from './modalSlice';
import { changeScreen } from './mainSlice';
import { Popup } from './popUp';
import { FindMessage, InfoMessage } from './messages'
import { useState, version } from 'react';
import { open1, open2, open3, open4, currentPopup } from './modalSlice';

const CommonInterface: React.FC = () => {




  const isOpen1 = useAppSelector((state) => state.modal.isOpen1)
  const isOpen2 = useAppSelector((state) => state.modal.isOpen2)
  const isOpen3 = useAppSelector((state) => state.modal.isOpen3)
  const isOpen4 = useAppSelector((state) => state.modal.isOpen4)
  const screen = useAppSelector((state) => state.main.screen)
  //const isOpen = useAppSelector((state) => state.modal.isOpen)
  const dispatch = useAppDispatch()

  const getFreePopup = () => {
   
    if (!isOpen1) {
        return 1
    } else if (!isOpen2) {
        return 2
    } else if (!isOpen3) {
        return 3
    } else if (!isOpen4) {
        return 4
    } else return 0
}







  const getPopup = (command: string) => {
    let num = getFreePopup()
      dispatch(currentPopup(num))
      if (num == 1) {
        dispatch(open1())
        } else if (num == 2) {
          dispatch(open2())
        } else if (num == 3) {
          dispatch(open3())
        } else if (num == 4) {
          dispatch(open4())
        }
    if (command == 'FIND') {
    } else return null
  }

  return (
    <div className="CommonInterfaceGrid">

        <header>
          <div className='commonDiv1'></div>
          <div className='commonTitle' onClick={() => dispatch(changeScreen('startup'))}>COMMON INTERFACE</div>  
          <div className='commonDiv2'></div>
        </header>
        
        <div className='borderLine1'></div>
        <div className='borderLine2'></div>
        <section className='commonGrid'>
            <div className='advise'>ADVISE</div>
            <div className='commonFirstGrid'>
                <div className='commonCell'>ESTIMTE</div>
                <div className='commonCell'>ORDER</div>
                <div className='commonCell'>REVIVE</div>
                <div className='commonCell' onClick={() => getPopup('FIND')}>FIND</div>
                <div className='commonCell'>PRMTRS</div>
                <div className='commonCell'>SEARCH</div>
                <div className='commonCell'>GOAHEAD</div>
                <div className='commonCell'>REPEAT</div>
                <div className='commonCell'>REPORT</div>
                <div className='commonCell'>COLLATE</div>
                <div className='commonCell'>GO BACK</div>
            </div>
            <div className='commonSecondGrid'>
                <div className='commonCell'>INFO</div>
                <div className='commonCell'>SYSTEMS</div>
                <div className='commonCell'>CONNOTE</div>
                <div className='commonCell'>MONITOR</div>
                <div className='commonCell'>TEST</div>
                <div className='commonCell'>DELAY</div>
                <div className='commonCell'>OPTIONS</div>
                <div className='commonCell'>TRACK</div>
                <div className='commonCell'>DELETE</div>
                <div className='commonCell'></div>
                <div className='commonCell'>TRIAL</div>
                <div className='commonCell'></div>
            </div>
        </section>      
       
    </div>
  )
}

export default CommonInterface