import { Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import Logout from './components/Logout'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default App;
