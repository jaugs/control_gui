import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import '../styles/startup.css'

interface startupProps {
    openModal: () => void;
  }

const Startup: React.FC<startupProps> = ({openModal}) => {

  const [count, setCount] = useState(0)

  return (
    <div className="startupWindow">

        <header>JURASSIC PARK - SYSTEM STARTUP</header>

        <section className='mainGrid'>
            <div className='headGrid'>
                <div className='headCard' onClick={openModal}>STARTUP AB(0)</div>
                <div className='headCard'>STARTUP CN/D</div>
            </div>
            <div className='subGrid'>
                <div className='gridCell'>Security Main</div>
                <div className='gridCell'>Monitor Main</div>
                <div className='gridCell'>Command Main</div>
                <div className='gridCell'>Electrical Main</div>
                <div className='gridCell'>Hydraulic Main</div>
                <div className='gridCell'>Master Main</div>
                <div className='gridCell'>Zoolog Main</div>

                <div className='gridCell'>SetGrids DNL</div>
                <div className='gridCell'>View VBB</div>
                <div className='gridCell'>Access TNL</div>
                <div className='gridCell'>Heating Cooling</div>
                <div className='gridCell'>Door Fold Interface</div>
                <div className='gridCell'>SAAG- Rnd</div>
                <div className='gridCell'>Repair Storage</div>

                <div className='gridCell'>Critical Locks</div>
                <div className='gridCell'>TeleCom VBB</div>
                <div className='gridCell'>Reset Revert</div>
                <div className='gridCell'>Emergncy Illumin</div>
                <div className='gridCell'>GAS/VLD Main II</div>
                <div className='gridCell'>Common Interface</div>
                <div className='gridCell'>Status Main</div>

                <div className='gridCell'>Control Passthru</div>
                <div className='gridCell'>TeleCom RSD</div>
                <div className='gridCell'>Template Main</div>
                <div className='gridCell'>FNCC Params</div>
                <div className='gridCell'>Explosion Fire Hzd</div>
                <div className='gridCell'>Schematic Main</div>
                <div className='gridCell'>Safety/ Health</div>
            </div>
        </section>      

    </div>
  )
}

export default Startup