import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Components/Navbar'
// import './App.css'


function App() {

  return (
    <>
      {/* <h1>Routing</h1> */}
      <Navbar />
      <AllRoutes />
    </>
  )
}

export default App
