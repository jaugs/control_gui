import '../styles/view.css'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { open, close } from './modalSlice';
import { changeScreen } from './mainSlice';

const ViewScreen: React.FC = () => {

  const screen = useAppSelector((state) => state.main.screen)
  const isOpen = useAppSelector((state) => state.modal.isOpen)
  const dispatch = useAppDispatch()



  return (
    <div className="viewGrid">

        <header onClick={() => dispatch(changeScreen('startup'))}>
          <div className='viewTitle'>SUBROUTINES - VIEW</div>
          <div>VIDEO INTERFACE ENVIROMENTAL WATCH</div>  
        </header>

        <section className='viewGrid'>
            <div className='headViewGrid'>
                <div className='Hview'>
                  <div className='headview1'>REMOTE CLC <br></br>VIDEO - H</div>
                </div>
                <div className='pview'>
                  <div className='headview2'>REMOTE CLC <br></br> VIDEO - P</div>
                </div>
            </div>
            <div className='subViewGrid'>
                <div className='leftView'>
                  <div className='viewBoxLeft'>Monitor Interval</div>
                  <div className='viewBoxLeft'>Monitor Control</div>
                  <div className='viewBoxLeft'>Optimize Sequence Rotation</div>
                  <div className='viewBoxLeft'>Specify Remote Camera</div>
                </div>
                <div className='centerView'>
                  <div className='smallBoxLeft'>Set</div>
                  <div className='smallBox'>Hold</div>
                  <div className='smallBoxLeft'>Auto</div>
                  <div className='smallBox'>Man</div>
                  <div className='smallBoxLeft'>AO(19)</div>
                  <div className='smallBox'>DD(33)</div>
                  <div className='largeBox'>Command Sequence</div>
                </div>
                <div className='rightView'>
                  <div className='viewBoxRight'>Monitor Interval</div>
                  <div className='viewBoxRight'>Monitor Control</div>
                  <div className='viewBoxRight'>Optimize Sequence Rotation</div>
                  <div className='viewBoxRightSingle'>RGB Image Parameters</div>
                </div>
          
            </div>
        </section>      

    </div>
  )
}

export default ViewScreen