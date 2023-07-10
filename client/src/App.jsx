import './App.css';
import { Route, Routes } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import GoogleLoginPage from './pages/GoogleLoginPage/GoogleLoginPage';
import Auth from './pages/Auth/Auth';
import {GoogleLogin, useGoogleLogin} from '@react-oauth/google'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GoogleLoginPage from './pages/GoogleLoginPage/GoogleLoginPage';
function App() {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  return (
    <div>
      {console.log(userName)}
        <div>hello</div>
      <GoogleLogin 
        onSuccess={credentialResponse => {
          console.log(credentialResponse)
        }}
        theme='filled_blue'
      />
      <Routes>
        <Route 
          path='/' 
          element={<GoogleLoginPage />}/>
          {/* <Route 
            path='/'
            element={<Auth />}
          /> */}
      </Routes>
    </div>
  );
}

export default App;
