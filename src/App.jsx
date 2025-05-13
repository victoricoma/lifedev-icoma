import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

import { useState, useEffect, use } from 'react'

import { AuthProvider } from './components/context/AuthContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import './App.css'
import { useAuthentication } from './hooks/useAuthentication'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user == undefined

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando a página ...</p>
  }
  return (
    <>
      <div>
        <AuthProvider value={user}>
          <BrowserRouter>
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
