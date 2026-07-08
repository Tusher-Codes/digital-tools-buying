import { ToastContainer } from 'react-toastify'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import CounterUp from './Components/CounterUp/CounterUp'

function App() {

  return (
    <div>
      <NavBar/>
      <HeroBanner/>
      <CounterUp/>

      <ToastContainer/>
    </div>
  )
}

export default App
