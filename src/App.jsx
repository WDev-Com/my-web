import './components/style/App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/about'
import React, { useEffect, useState } from 'react'
//import Work from './components/Work'
import Works from './components/workdata'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DataProvider from "./context/DataProvider"
function App() {
  return (
    <>
      <div className='App'>
        <DataProvider>
          <BrowserRouter>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/work" element={<Works />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </DataProvider>
      </div>
    </>
  )
}

export default App
