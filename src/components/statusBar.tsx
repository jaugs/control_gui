import { useEffect, useState } from 'react';
import logo from '../assets/logo2.svg'
import '../styles/statusBar.css'

const Statusbar: React.FC = () => {

    const [time, setTime] = useState("");

    useEffect(() => {

        const myInterval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 60000);
  
      return () => {
        clearInterval(myInterval);
      }
    }, [])
  
     
      
      

    return (
        <header className='statusBar'>
            <div className='logoContainer'>
                <img className='logo' src={logo}></img>
            </div>
            <div>{time}</div>
            <div className='userContainer'>Operator: User1</div>
            <div className='statusContainer'>
                <svg className='statusColor' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" />
                </svg>
                <div>System Status</div>
            </div>
    </header>
    )
}

export default Statusbar