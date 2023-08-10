import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/login';
import SignupForm from './components/signup';
import Upload from './components/upload';
import Home from './components/home';
import { FaBBsFacebookeer } from 'react-icons/fa';
/*import { TfiFacebook } from '@react-icons/all-files/fa/TfiFacebook';*/
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() { 
    return( 
        <div className='home'>
          <header className="header">
            <nav className="nav">
              <a href="#" className="nav_logo">
                3dSmart
              </a>

              <ul className="nav_items">
                <li className="nav_item">
                  <a href="/3D.S.F_stage" className="nav_link">
                    Home
                  </a>
                  <a href="#" className="nav_link">
                    Services
                  </a>
                  <a href="/3D.S.F_stage/Upload" className="nav_link" id="upload">
                    Upload
                  </a>
                  <a href="#" className="nav_link">
                    Contact
                  </a>
                </li>
              </ul>
              <a href='/3D.S.F_stage/login'><button className="button" id="form-open">
                login
              </button></a>
            </nav>
          </header>
          <div>
          <BrowserRouter>
          <Routes>
            <Route  path="/3D.S.F_stage/login" element={<LoginForm/>}/>
            <Route  path="/3D.S.F_stage/signup" element={<SignupForm/>}/>
            <Route  path="/3D.S.F_stage/Upload" element={<Upload/>}/>
            <Route  path="/3D.S.F_stage" element={<Home/>}/>
          </Routes>
          </BrowserRouter>
          </div>
          <div class="footer">
            <div class="container">
              <div class="row">
                <div class="footer-col">
                  <h4>company</h4>
                  <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                  </ul>
                </div>
                <div class="footer-col">
                  <h4>get help</h4>
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">suggestion</a></li>
                  </ul>
                </div>
                <div class="footer-col">
                  <h4>become user</h4>
                  <ul>
                    <li><a href="/3D.S.F_stage/signup">Signup</a></li>
                  </ul>
                </div>
                <div class="footer-col">
                  <h4>follow us</h4>
                  <div class="social-links">
                    <a href="#"><i class="fab fa-twitter"><FaFacebookF /></i></a>
                    <a href="#"><i class="fab fa-instagram"><FaLinkedinIn /></i></a>
                    <a href="https://3dsmartfactory.csit.ma/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"><FaGoogle /></i></a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        </div>  
);}


export default App;
