import { ToastContainer } from 'react-toastify'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import CounterUp from './Components/CounterUp/CounterUp'
import CallToAction from './Components/CallToAction/CallToAction'
import Footer from './Components/Footer/Footer'
import AllShowcasingProduct from './Components/AllShowcasingProduct/AllShowcasingProduct'
import { Suspense } from 'react'

function App() {


  const fetchingDigitalTools = async() => {
    const fetchingDigiData = await fetch('/public/digitalTools.json')
    return fetchingDigiData.json()
  }

  const fetchingModernTools = fetchingDigitalTools()
  return (
    <div>
      <NavBar/>
      <HeroBanner/>
      <CounterUp/>

      <Suspense fallback={<div className="flex items-center justify-center bg-transparent">
              <span className="loading loading-ring text-primary loading-lg w-60 h-60"></span>
              </div>}>
              <AllShowcasingProduct fetchingModernTools={fetchingModernTools}/>
      </Suspense>


      <h2 className='text-6xl text-center my-5'>More Component Load In</h2>

      <CallToAction/>
      <Footer/>

      {/* React Toastify */}
      <ToastContainer/>
    </div>
  )
}

export default App
