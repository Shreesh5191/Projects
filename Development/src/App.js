import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './website/pages/Home';
import Contact from './website/pages/Contact';
import About from './website/pages/About';
import Service from './website/pages/Service';
import Price from './website/pages/Price';
import Appointment from './website/pages/Appointment';
import Openhours from './website/pages/Openhours';
import Ourteam from './website/pages/Ourteam';
import Testimonial from './website/pages/Testimonial';
import Admin_login from './admin/pages/Admin_login';
import Dashboard from './admin/pages/Dashboard';
import Manage_Categories from './admin/pages/Manage_Categories';
import Add_Categories from './admin/pages/Add_Categories';
import Manage_Services from './admin/pages/Manage_Services';
import Add_Services from './admin/pages/Add_Services';
import Manage_Blog from './admin/pages/Manage_Blog';
import Add_Blog from './admin/pages/Add_Blog';
import Manage_Contect from './admin/pages/Manage_Contect';
import Signup from './website/pages/Signup';
import Login from './website/pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Manage_Customer from './admin/pages/Manage_Customer';
import Profile from './website/pages/Profile';
import Edit_profile from './website/pages/Edit_profile';
import View_service from './website/pages/View_service';
import Blog from './website/pages/Blog';





function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer></ToastContainer>
    <Routes>
      {
              // website routes
      }
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}> </Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/price' element={<Price/>}></Route>
      <Route path='/appointment' element={<Appointment/>}></Route>
      <Route path='/opening' element={<Openhours/>}></Route>
      <Route path='/team' element={<Ourteam/>}></Route>
      <Route path='/testimonial' element={<Testimonial/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/edit-profile/:id' element={<Edit_profile />}></Route>
      <Route path='/view_services/:id' element={<View_service/>}></Route>
      <Route path='/View_Blog' element={<Blog/>}></Route>


      {// admin routes
     
      }

     <Route path='/admin' element={<Admin_login/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path='/manage_categories' element={<Manage_Categories/>}></Route>
      <Route path='/add_categories' element={<Add_Categories/>}></Route>
      <Route path='/manage_services' element={<Manage_Services/>}></Route>
      <Route path='/add_services' element={<Add_Services/>}></Route>
      <Route path='/manage_blog' element={<Manage_Blog/>}></Route>
      <Route path='/add_blog' element={<Add_Blog/>}></Route>
      <Route path='/viewcontect' element={<Manage_Contect/>}></Route>
      <Route path='/customer' element ={<Manage_Customer/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App