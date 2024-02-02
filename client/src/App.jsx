import { AuthProvider } from './contexts/authContext/AuthContext'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './components/auth/Auth';
import GeneralProtectedRoute from './components/protectedRoutes/GeneralProtectedRoute'
import Dashboard from './pages/generals/Dashboard';

const App=()=> {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/dashboard" element={<GeneralProtectedRoute elementBody={<Dashboard />} />} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App