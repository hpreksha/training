import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import RouteConfig from '../Routes.jsx'
function App() {

  return (
    <BrowserRouter>
    <div className='container'>
      <div className='navbar'>
      <Navbar />
      </div>
      <div className='content'>
      <RouteConfig />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
