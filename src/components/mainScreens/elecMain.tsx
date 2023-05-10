import '../../styles/elecMain.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScreen } from '../slices/mainSlice';

const ElectricalMain: React.FC = () => {

  const screen = useAppSelector((state) => state.main.screen)
  const dispatch = useAppDispatch()

  return (
    <div className="elecContainer">

        <header onClick={() => dispatch(changeScreen('startup'))}>ELECTRICAL MAIN CONTROL MODULES</header>
        <div className='hline2'></div>
        <div className='hline3'></div>
        <section className='elecGrid'>
            <div className='mainElecRow'>
                <div 
                    className='mainElecBox'
                    id='main1'>MAIN
                </div>
                <div 
                    className='mainElecBox'
                    id='main2'>SUBMAIN
                </div>
                <div className='m1line'></div>
                <div 
                    className='mainElecBox'
                    id='main3'>MAIN
                </div>
                <div 
                    className='mainElecBox'
                    id='main4'>SUBMAIN
                </div>
            </div>
            <div className='secondElecRow'>
                <div 
                    className='mainElecBox'
                    id='second1'>Sec A1-A9
                </div>
                <div 
                    className='mainElecBox'
                    id='second2'>Sec A1-A9
                </div>
                <div className='s1line'></div>
                <div 
                    className='mainElecBox'
                    id='second3'>Sec B1-B9
                </div>
                <div 
                    className='mainElecBox'
                    id='second4'>Sec B1-B9
                </div>
            </div>
            <div className='thirdElecRow'>
                <div 
                    className='smallElecBox'
                    id='third1'>A01-A011
                </div>
                <div 
                    className='smallElecBox'
                    id='third2'>Temp CVD
                </div>
                <div className='t1line'></div>
                <div className='smallElecBox'>B01-B11</div>
                <div className='smallElecBox'>Security (0)</div>
                <div className='smallElecBox'>A21-A211</div>
                <div className='smallElecBox'>Perm CVD (0)</div>
                <div className='t2line'></div>
                <div className='smallElecBox'>B021-B0211</div>
                <div className='smallElecBox'>Security (1)</div>
            </div>
            <div className='forthElecRow'>
                <div 
                    className='mainElecBox'
                    id='fl1'>Sec B1-B9
                </div>
                <div 
                    className='mainElecBox'
                    id='fl2'>Main Grid P
                </div>
                <div className='f1line'></div>
                <div 
                    className='mainElecBox'
                    id='fl3'>Sec A1-A9
                </div>
                <div 
                    className='mainElecBox'
                    id='fl4'>Main Grid M
                </div>
            </div>
            <div className='fifthElecRow'>
                <div className='subGrid1'>
                    <div 
                        className='smallElecBox'
                        id='sg1'>CSX (89A)
                    </div>
                    <div 
                        className='smallElecBox'
                        id='sg2'>Main Set 1
                    </div>
                    <div 
                        className='smallElecBox'
                        id='sg3'>CSX (1031)
                    </div>
                    <div 
                        className='smallElecBox'
                        id='sg4'>Main Set ATL
                    </div>
                    <div 
                        className='smallElecBox'
                        id='sg5'>RSX (55-99)
                    </div>
                    <div 
                        className='smallElecDash'
                        id='sg6'>Grid V-VX
                    </div>
                    <div 
                        className='smallElecBox'
                        id='sg7'>Aux Pwr (4)
                    </div>
                    <div 
                        className='smallElecDash'
                        id='sg8'>Reset Grids
                    </div>
                </div>
                <div className='subGrid2'>
                    <div 
                        className='mainElecBox'
                        id='sg9'>Core (Aux)
                    </div>
                    <div 
                        className='smallElecBox'
                        id='sg10'>Security (N)
                    </div>
                    <div 
                        className='smallElecBox'
                        id='sg11'>Not in Use
                    </div>
                </div>
                <div className='subGrid3'>
                    <div className='smallElecBox'>Aux Grid O/O</div>
                    <div className='smallElecBox'>Aux Grid R/V</div>
                    <div className='smallElecBox'>Power Config</div>
                    <div className='smallElecBox'>Core Config</div>
                </div>
            </div>
        </section>      
    </div>
  )
}

export default ElectricalMain