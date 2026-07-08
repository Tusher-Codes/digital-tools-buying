import { ToastContainer } from 'react-toastify'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import CounterUp from './Components/CounterUp/CounterUp'
import CallToAction from './Components/CallToAction/CallToAction'

function App() {

  return (
    <div>
      <NavBar/>
      <HeroBanner/>
      <CounterUp/>

      <h2 className='text-6xl text-center my-5'>More Component Load In</h2>

      <CallToAction/>

      <ToastContainer/>
    </div>
  )
}

export default App
