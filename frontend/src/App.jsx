import React from 'react'
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={
          <CreatePost/>
        } />
        <Route path='/feed' element={<Feed/>}/>
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/dashboard" element={
          <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
      </Routes>
    </Router>
  )
}

export default App