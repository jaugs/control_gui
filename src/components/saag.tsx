import '../styles/saag.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { changeScreen } from './mainSlice';
import { changeOpen, changeContent, newPopup } from './popupSlice';

const Saagrnd: React.FC = () => {

  const popUpArr = useAppSelector((state) => state.popup.PopupArr)
  const dispatch = useAppDispatch()

  const getPopup = (word: string) => {
    let num = popUpArr.findIndex((item) => {return !item.isOpen})
    if (popUpArr.length > 5 && num === -1 ) {
      return
    }
    if (num === -1) {
      dispatch(newPopup({isOpen: true, coords: {x:50, y:50}, isDragging: false, contents: word}))
    } else {
    dispatch(changeOpen(num))
    dispatch(changeContent({contents: word, index: num}))
    }
  }

  return (
    <div className="saagGrid">

        <header className='saagHeader'  onClick={() => dispatch(changeScreen('startup'))}> 
            <div className='saagTitle'>SECURE ADMINISTRATION AUTHENTICATION GATEWAY</div>
            <div className='saagTitle'>Research and Development Portal</div>  
        </header>
        
        <section className='saagGrid'>
            <div className='authenticate' onClick={() => getPopup('ADVISE')}>AUTHENTICATE</div>
            <div className='commonFirstGrid'>
                <div className='saagCell' onClick={() => getPopup('ESTIMATE')}>ESTIMTE</div>
                <div className='saagCell' onClick={() => getPopup('ORDER')}>ORDER</div>
                <div className='saagCell' onClick={() => getPopup('REVIVE')}>REVIVE</div>
                <div className='saagCell' onClick={() => getPopup('FIND')}>FIND</div>
                <div className='saagCell' onClick={() => getPopup('PARAMETERS')}>PRMTRS</div>
                <div className='saagCell' onClick={() => getPopup('SEARCH')}>SEARCH</div>
                <div className='saagCell' onClick={() => getPopup('GOAHEAD')}>GOAHEAD</div>
                <div className='saagCell' onClick={() => getPopup('REPEAT')}>REPEAT</div>
                <div className='saagCell' onClick={() => getPopup('REPORT')}>REPORT</div>
                <div className='commonCell' onClick={() => getPopup('COLLATE')}>COLLATE</div>
                <div className='saagCell' onClick={() => getPopup('GOBACK')}>GO BACK</div>
            </div>
        </section>
    </div>
  )
}

export default Saagrnd