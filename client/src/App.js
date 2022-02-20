import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './routes/Dashboard'
import Frontpage from './routes/Frontpages'
import './App.css'

//TODO - include suspence for lazy loading pages

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/*' element={<Frontpage />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


// FUTURE ADDITIONS AND CHANGES
// TODO - aftersalespro.gr API to connect with couriers ELTA,ACS etc etc 
