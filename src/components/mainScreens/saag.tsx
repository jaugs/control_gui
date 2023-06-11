import '../../styles/saag.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { changeOpen, changeContent, newPopup } from '../slices/popupSlice';
import { useGetPopup } from '../getPopup';

const Saagrnd: React.FC = () => {

  const dispatch = useAppDispatch();
  const getPopup = useGetPopup();

  return (
    <div className="saagContainer">

        <header className='saagHeader'  onClick={() => dispatch(changeScreen('startup'))}> 
            <div className='saagTitle'>SECURE ADMINISTRATION AUTHENTICATION GATEWAY</div>
            <div className='saagTitle'>Research and Development Portal</div>  
        </header>
        <div className='authenticate' onClick={() => getPopup('AUTHENTICATE')}>AUTHENTICATE</div>
        <section className='saagGrid'>
            <div className='saagFirstGrid'>
                <div className='saagCellHeader1' onClick={() => getPopup('AUTHERROR')}>BIOINFORMATICS</div>
                <div className='saagCell' onClick={() => getPopup('AUTHERROR')}>SEQUENCE ANALYSIS</div>
                <div className='saagCell' onClick={() => getPopup('AUTHERROR')}>EXPRESSION</div>
                <div className='saagCell' onClick={() => getPopup('AUTHERROR')}>ANNOTATION</div>
            </div>
            <div className='saagSecondGrid'>
                <div className='saagCellHeader2' onClick={() => getPopup('AUTHERROR')}>MODELS</div>
                <div className='saagCell' onClick={() => getPopup('AUTHERROR')}>STRUCTURE/DOCKING</div>
                <div className='saagCell' onClick={() => getPopup('AUTHERROR')}>DYNAMIC ANALYSIS</div>
                <div className='saagCell' onClick={() => getPopup('AUTHERROR')}>EXP DESIGN</div>
            </div>
            <div className='saagThirdGrid'>
                <div className='saagCellHeader3' onClick={() => getPopup('AUTHERROR')}>REPORTING</div>
                <div className='saagCell' onClick={() => getPopup('AUTHERROR')}>LAB MONITOR</div>
                <div className='saagCell' onClick={() => getPopup('AUTHERROR')}>PERSONNEL</div>
                <div className='saagCell' onClick={() => getPopup('AUTHERROR')}>SITE B</div>
            </div>
            
        </section>
    </div>
  )
}

export default Saagrnd