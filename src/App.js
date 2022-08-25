import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/navbar";
import {Footer} from './components/Footer/footer';
import './App.css';
import Landing from './components/pages/Landing/landing';
import Services from './components/pages/Services/service';
import Qdisplay from './components/pages/Qdisplay/qdisplay';
import UIUX from './components/pages/UIUX/ui';
import {Cloudcomputing} from './components/pages/Cloudcomputing/cloud';
import Leadership from './components/pages/Leadership/leadership';
import QHC from './components/pages/QHC/qhc';
import Career from './components/pages/Career/career';
import Biscuit from './components/pages/Biscuit/biscuit';
import Aboutus from './components/pages/Aboutus/about';
import Productdevelopment from './components/pages/Product development/productdev';
import Digitalmarketing from './components/pages/Digital marketing/marketing';
import Showcase from './components/pages/Showcase/showcase';
import ContactUs from './components/pages/ContactUs/contact';
import Itconsulting from './components/pages/Itconsulting/it';
import Products from './components/pages/Products/products';

function App() {
  return (
    <Router >
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/services' element={<Services />} />
        <Route path='/qdisplay' element={<Qdisplay />} />
        <Route path='/uidesign' element={<UIUX />} />
        <Route path='/cloudcomputing' element={<Cloudcomputing />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/qhc' element={<QHC/>} />
        <Route path='/careers' element={<Career />} />
        <Route path='/biscuit' element={<Biscuit />} />
        <Route path='/aboutus' element={<Aboutus/>} />
        <Route path='/productdevelopment' element={<Productdevelopment/>} />
        <Route path='/digitalmarketing' element={<Digitalmarketing/>} />
        <Route path='/showcase' element={<Showcase/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/itconsulting' element={<Itconsulting/>} />
        <Route path='/products' element={<Products />} />
       </Routes>
       <Footer />
       </Router>
  );
}

export default App;
