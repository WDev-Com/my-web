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
import api from "./components/api_client/api"
function App() {
  const [profileData, setProfileData] = useState(null);
  const [aboutdata, setAboutdata] = useState(null);
  const [workdata, setWorkdata] = useState([]);
  const [contactdata, setContactdata] = useState(null);
  const getdata = async () => {
    try {
      const response = await api.get(`/api/${21}`);
      const singleData = response.data;
      setProfileData(singleData);
    } catch (error) {
      console.log(error);
    }
  };

  const getaboutdata = async () => {
    try {
      const response = await api.get(`/api/about/${21}`);
      const singleAbData = response.data;
      setAboutdata(singleAbData);
    } catch (error) {
      console.log(error);
    }
  }

  const getworkdata = async () => {
    try {
      const response = await api.get(`/api/work/all`);
      const allworkdata = response.data;
      setWorkdata(allworkdata);
    } catch (error) {
      console.log(error);
    }
  }
  const getcontactdata = async () => {
    try {
      const response = await api.get(`/api/contact/${21}`);
      const Contactdata = response.data;
      setContactdata(Contactdata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getdata();
    getaboutdata()
    getworkdata()
    getcontactdata()
  }, []);

  return (
    <>
      <div className='App'>
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
          <Navbar data0={profileData} />
          <Routes>
            <Route exact path="/" element={<Home data1={profileData} />} />
            <Route exact path="/about" element={<About data2={aboutdata} />} />
            <Route exact path="/work" element={<Works data3={workdata} />} />
            <Route exact path="/contact" element={<Contact data4={contactdata} />} />
          </Routes>
          <Footer data5={profileData} />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
