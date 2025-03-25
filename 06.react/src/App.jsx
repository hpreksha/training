import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.jsx';
import States from './components/States.jsx';
import Lists from './components/Lists.jsx';
import ComponentRendering from './components/ComponentRendering.jsx';
import Props from './components/Props.jsx';
import UseEffectExample from './hooks/UseEffectExample.jsx';
function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/states" element={<States />} />
            <Route path='/lists' element={<Lists />} />
            <Route path='/render' element={<ComponentRendering />} />
            <Route path='/props' element={<Props />} />
            <Route path='/use-effect' element={<UseEffectExample />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
