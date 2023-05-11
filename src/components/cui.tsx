import '../styles/cuiStyle.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { changeScreen } from '../components/slices/mainSlice'
import { newPopup, changeOpen, changeContent } from '../components/slices/popupSlice'
import { toggleMap } from '../components/slices/mapSlice';
import { toggleCui } from './slices/interfaceSlice';

const Cui: React.FC = () => {

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
    <div className="cuiWindow">

        <header className='cuiHeader'>
        <div className='cuiTitle'>COMMON USER INTERFACE</div>
        <div className='cuiButton'>-</div>
        <div className='cuiButton' onClick={() => dispatch(toggleCui())}>&times;</div>
        </header>

        <section className='cuiSection'>
            <div className='cuisubgrid'>
                <div className='cuiCell' onClick={() => dispatch(toggleMap())}>Monitor Main</div>
                <div className='cuiCell' onClick={() => dispatch(changeScreen('hydraulics'))}>Hydraulic Main</div>
            </div>
        </section>
    </div>
  )
}
export default Cui
