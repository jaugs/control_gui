import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Startup from './components/startup'
import ModalWindow from './components/modal'

function App() {

  const [count, setCount] = useState(0)
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
    
    </div>
  )
}

export default App
