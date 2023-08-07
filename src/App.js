import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/login';
import SignupForm from './components/signup';
import Upload from './components/upload';
import Home from './components/home';
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

          <BrowserRouter>
          <Routes>
            <Route  path="/3D.S.F_stage/login" element={<LoginForm/>}/>
            <Route  path="/3D.S.F_stage/signup" element={<SignupForm/>}/>
            <Route  path="/3D.S.F_stage/Upload" element={<Upload/>}/>
            <Route  path="/3D.S.F_stage" element={<Home/>}/>
          </Routes>
          </BrowserRouter>

          
              
        </div>
);}


export default App;
