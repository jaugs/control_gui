import '../../styles/commonInterface.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useGetPopup} from '../getPopup';

const CommonInterface: React.FC = () => {

  const dispatch = useAppDispatch()
  const getPopup = useGetPopup()

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
            <div className='advise' onClick={() => getPopup('ADVISE')}>ADVISE</div>
            <div className='commonFirstGrid'>
                <div className='commonCell' onClick={() => getPopup('ESTIMATE')}>ESTIMTE</div>
                <div className='commonCell' onClick={() => getPopup('ORDER')}>ORDER</div>
                <div className='commonCell' onClick={() => getPopup('REVIVE')}>REVIVE</div>
                <div className='commonCell' onClick={() => getPopup('FIND')}>FIND</div>
                <div className='commonCell' onClick={() => getPopup('PARAMETERS')}>PRMTRS</div>
                <div className='commonCell' onClick={() => getPopup('SEARCH')}>SEARCH</div>
                <div className='commonCell' onClick={() => getPopup('GOAHEAD')}>GOAHEAD</div>
                <div className='commonCell' onClick={() => getPopup('REPEAT')}>REPEAT</div>
                <div className='commonCell' onClick={() => getPopup('REPORT')}>REPORT</div>
                <div className='commonCell' onClick={() => getPopup('COLLATE')}>COLLATE</div>
                <div className='commonCell' onClick={() => getPopup('GOBACK')}>GO BACK</div>
            </div>
            <div className='commonSecondGrid'>
                <div className='commonCell' onClick={() => getPopup('INFO')}>INFO</div>
                <div className='commonCell' onClick={() => getPopup('SYSTEMS')}>SYSTEMS</div>
                <div className='commonCell' onClick={() => getPopup('CONNOTE')}>CONNOTE</div>
                <div className='commonCell' onClick={() => getPopup('MONITOR')}>MONITOR</div>
                <div className='commonCell' onClick={() => getPopup('TEST')}>TEST</div>
                <div className='commonCell' onClick={() => getPopup('DELAY')}>DELAY</div>
                <div className='commonCell' onClick={() => getPopup('OPTIONS')}>OPTIONS</div>
                <div className='commonCell' onClick={() => getPopup('TRACK')}>TRACK</div>
                <div className='commonCell' onClick={() => getPopup('DELETE')}>DELETE</div>
                <div className='commonCell'></div>
                <div className='commonCell' onClick={() => getPopup('TRIAL')}>TRIAL</div>
                <div className='commonCell'></div>
            </div>
        </section>
        
    </div>
  )
}

export default CommonInterface