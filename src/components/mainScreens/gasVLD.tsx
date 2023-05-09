import '../../styles/gasVLD.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../mainSlice';
import { changeOpen, changeContent, newPopup } from '../popupSlice';

const GasVLD: React.FC = () => {

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
    <div className="gasContainer">

        <header className='gasHeader'  onClick={() => dispatch(changeScreen('startup'))}> 
            <div className='saagTitle'>GAS MAIN II VISUAL LEAK DETECTOR</div>
        </header>
        <section className='gasGrid'>
            <div className='gasModules'>
                <div className='gasCell'>DETECTOR MODULES</div>
                <div className='gasGrid1'>
                    <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>LAB/IN1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>LAB/OUT1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>LAB/IN2</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>LAB/OUT2</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>VITRO/IN1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>VITRO/OUT1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>CRYO/IN1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>CRYO/OUT1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>CRYO/IN2</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>CRYO/OUT2</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>LODGE/IN1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>LODGE/OUT1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>VC/IN1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>VC/OUT1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>MB/IN1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>MB/OUT1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>AVA/IN1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>AVA/OUT1</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>EXHAUST/MAIN</div>
                        <div className='gasControl' onClick={() => getPopup('AUTHERROR')}>EXHAUST/SUB</div>
                </div>
            </div>
            <div className='gasModules2'>
                <div className='gasCell' onClick={() => getPopup('AUTHERROR')}>PRESSURE CONTROL</div>
                <div className='gasCell' onClick={() => getPopup('AUTHERROR')}>VIEW</div>
                <div className='gasCell' onClick={() => getPopup('AUTHERROR')}>TEST</div>
                <div className='gasCell' onClick={() => getPopup('AUTHERROR')}>SHUT OFF</div>
                <div className='gasCell' onClick={() => getPopup('AUTHERROR')}>STORAGE</div>
            </div>
            
        </section>
    </div>
  )
}

export default GasVLD