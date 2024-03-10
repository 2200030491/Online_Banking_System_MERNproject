import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import SignUp from './SignUp'
import './style.css'

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">SignUp</Link></li> 
        </ul>
      </nav>
      <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/about" element={<About/>} exact/>
      <Route path="/contact" element={<Contact/>} exact/>
      <Route path='/login' element={<Login/>} exact/>
      <Route path='/signup' element={<SignUp/>} exact/>
      </Routes>
    </div>
  )
}
