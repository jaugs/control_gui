import '../styles/commonInterface.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { changeScreen } from './mainSlice';
import { Popup } from './popUp';
import Messages from './messages'
import { changeCoords, changeOpen, changeContent } from './popupSlice';


const CommonInterface: React.FC = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)

  const dispatch = useAppDispatch()

  const getPopup = (word: string) => {
    if (!popUpArr[0].isOpen) {
      dispatch(changeOpen(0))
      dispatch(changeContent({contents: word, index: 0}))
    }
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
        
          {popUpArr.map((item, index) => {
           return <Popup version={index} key={index} contents={<Messages contents = {item.contents}/>}></Popup>
          })}
          
        
       
    </div>
  )
}

export default CommonInterface