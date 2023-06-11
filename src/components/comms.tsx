import '../styles/commWindow.css';
import { useAppDispatch, useAppSelector } from '../app/hooks'

interface CommWindowProps  {

}


const CommWindow: React.FC<CommWindowProps> = () => {

return (
    <div className='comWindow'>
        <div className='comProfile'>
            <div className='IDpic'></div>
            <div>
                <div className='name'>John Arnold</div>
                <div className='title'>Chief Engineer</div>
            </div>
        </div>
        <div className='comText'>Leiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt 
        in culpa qui officia deserunt mollit anim id est laborum.;es</div>
        <div className='comControl'>
            <div className='comStatus'>
                <div>Status:</div>
                <svg className='comColor' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle fill='#62F40C' stroke='black' strokeWidth='11' className='circle' cx="50" cy="50" r="50" />
                </svg>
            </div>
            <div className='comStatus'>
                <div>Transmit:</div>
                <svg className='comColor' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle fill='#EE4B2B' stroke='black' strokeWidth='11' className='circle' cx="50" cy="50" r="50" />
                </svg>
            </div>
            <div className='freq'>
                <div>Frequency:</div>
                <div className='freqCont'>129.2</div>
            </div>
        </div>
    </div>
)


}

export default CommWindow
