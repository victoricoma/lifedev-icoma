import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

import { useState, useEffect, use } from 'react'

import { AuthProvider } from './context/AuthContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import CreatePost from './pages/CreatePost/CreatePost'
import Post from './pages/Post/Post'
import Search from './pages/Search/Search'
import About from './pages/About/About'
import './App.css'
import { useAuthentication } from './hooks/useAuthentication'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando . . . </p>
  }
  return (
    <>
      <div>
        <AuthProvider value={{ user }}>
          <BrowserRouter>
            <Navbar />
            <div className="container">
              <Routes>
                <Route path="/"
                  element={<Home />} />
                <Route path="/about"
                  element={<About />} />
                <Route 
                path='/posts/create'
                element={user ? <CreatePost /> :<Navigate to="/login" />}
                />
                <Route 
                path='/post/:id'
                element={user ? <CreatePost /> :<Navigate to="/login" />}
                />
                <Route
                path='/post/:id'
                element={user ? <Post /> :<Navigate to="/login" />}
                />
                <Route
                path='/search'
                element={user ? <Search /> :<Navigate to="/login" />}
                />
                <Route 
                path='/login'
                element={!user ? <Login /> :<Navigate to="/" />}
                />
                <Route 
                path='/register'
                element={!user ? <Register /> :<Navigate to="/" />}
                />
                <Route 
                path='/dashboard'
                element={user ? <Dashboard /> :<Navigate to="/login" />}
                />
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
