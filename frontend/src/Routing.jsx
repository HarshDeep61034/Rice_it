import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Dashboard from './pages/Dashboard'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
