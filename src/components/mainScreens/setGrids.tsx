import '../../styles/setGrids.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';
import { newPopup, changeOpen, changeContent } from '../slices/popupSlice';
import { useGetPopup } from '../getPopup';

const SetGrids: React.FC = () => {

  const dispatch = useAppDispatch();
  const getPopup = useGetPopup();

  return (
    <div className="gridContainer">

        <header onClick={() => dispatch(changeScreen('startup'))}>SET GRIDS DNL</header>
        <section className='DNLGrid'>
        <div className='s1col'>
            <div className='s2col'>CUSTOM PARAMETERS</div>
            <div className='s2col' onClick={() => getPopup('STANDARDPARAMS')}>STANDARD PARAMETERS</div>
        </div>
        <div className='s2col'>ELECTRICAL SECONDARY (H)</div>
        <div className='s3col'>
            <div className='s3colRowLong'>MAIN GRID LEVEL</div>
            <div className='s3colRow'>A4</div>
            <div className='s3colRow'>B4</div>
            <div className='s3colRow'>C7</div>
            <div className='s3colRow'>D4</div>
            <div className='s3colRow'>E9</div>
        </div>
        <div className='s3col'>
            <div className='s3colRowLong'>MAIN GRID LEVEL</div>
            <div className='s3colRow'>C9</div>
            <div className='s3colRow'>R5</div>
            <div className='s3colRow'>D5</div>
            <div className='s3colRow'>E3</div>
            <div className='s3colRow'>G4</div>
        </div>
        <div className='s2col'>ELECTRICAL SECONDARY (P)</div>
        <div className='s3col'>
            <div className='s3colRowLong'>MAIN GRID LEVEL</div>
            <div className='s3colRow'>A2</div>
            <div className='s3colRow'>B3</div>
            <div className='s3colRow'>C6</div>
            <div className='s3colRow'>D11</div>
            <div className='s3colRow'>E2</div>
        </div>
        <div className='s3col'>
            <div className='s3colRowLong'>MAIN GRID LEVEL</div>
            <div className='s3colRow'>C9</div>
            <div className='s3colRow'>R5</div>
            <div className='s3colRow'>D5</div>
            <div className='s3colRow'>E3</div>
            <div className='s3colRow'>G4</div>
        </div>
        <div className='s3col'>
            <div className='s3colRowLong'>MAIN GRID LEVEL</div>
            <div className='s3colRow'>A8</div>
            <div className='s3colRow'>B1</div>
            <div className='s3colRow'>C8</div>
            <div className='s3colRow'>D8</div>
            <div className='s3colRow'>E8</div>
        </div>
        <div className='s3col'>
            <div className='s3colRowLong'>MAIN GRID LEVEL</div>
            <div className='s3colRow'>F4</div>
            <div className='s3colRow'>R8</div>
            <div className='s3colRow'>P4</div>
            <div className='s3colRow'>E5</div>
            <div className='s3colRow'>L6</div>
        </div>
        <div className='s2col'>ELECTRICAL SECONDARY (M)</div>
        <div className='s3col'>
            <div className='s3colRowLong'>MAIN GRID LEVEL</div>
            <div className='s3colRow'>A1</div>
            <div className='s3colRow'>B1</div>
            <div className='s3colRow'>C1</div>
            <div className='s3colRow'>D2</div>
            <div className='s3colRow'>E2</div>
        </div>
        <div className='s3col'>
            <div className='s3colRowLong'>MAIN GRID LEVEL</div>
            <div className='s3colRow'>C4</div>
            <div className='s3colRow'>R4</div>
            <div className='s3colRow'>D4</div>
            <div className='s3colRow'>E5</div>
            <div className='s3colRow'>G6</div>
        </div>
        </section>      
    </div>
  )
}

export default SetGrids