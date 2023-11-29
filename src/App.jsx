import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Signin } from './Pages/Signin'
import { Signup } from './Pages/Signup'
import { Profile } from './Pages/Profile'
import { About } from './Pages/About'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/signin' element={<Signin/> } />
        <Route path='/signup' element={<Signup/> } />
        <Route path='/profile' element={<Profile/> } />
        <Route path='/about' element={<About/> } />
      </Routes>
    </BrowserRouter>
  )
}
