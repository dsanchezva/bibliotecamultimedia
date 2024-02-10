import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  

  return (
    <section className='layout'>
     
    <Navbar className="header"/>


    <div className='main'>
    <Routes>

    <Route path='/' element={<Home/>}/>



    </Routes>
    </div>


   

    <Footer className="footer"/>


    </section>
  )
}

export default App
