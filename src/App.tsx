import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Startup from './components/startup'
import ModalWindow from './components/modal'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './components/counterSlice'


function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(true);

    const handleCloseModal = () => {
      console.log('Modal closed');
    };
    
    const openModal = () => {
      setIsOpen(true)
    }

  return (
    <div className="App">
      
      
      <Startup openModal={openModal}/>
      <ModalWindow 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="my modal2" 
        onClose={handleCloseModal} 
        children="dd" />

      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        
      </div>
    
    </div>
  )
}

export default App
