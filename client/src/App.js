import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/fontawesome/all.css'
import Dashboard from './routes/Dashboard'
import Frontpage from './routes/Frontpages'


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
