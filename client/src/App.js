import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/fontawesome/all.css'
import Dashboard from './pages/Dashboard'
import Frontpage from './pages/Frontpage'

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
// TODO - fix blank page after reload
  )
}

export default App
