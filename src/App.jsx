
import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'


function App() {

  return (
    <>
      <Navbar></Navbar>
     
      <h1 className='text-3xl bg-red-400'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>

      

    </>
  )
}

export default App
