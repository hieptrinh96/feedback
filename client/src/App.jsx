import './App.css';
import GoogleButton from './pages/GoogleButton.jsx';
import Profile from './pages/Profile.jsx';
import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import * as profileService from './services/profileService'

function App() {
  // const [profile, setProfile] = useState(null)
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const userData = await profileService.firstQuery()
  //     setProfile(userData)
  //   }
  //   fetchUser()
  // }, [profile])
  
  return (
    <div className="App">
      <h1>App</h1>
      <Routes>
        <Route 
          path='/test'
          element={<GoogleButton />}
        />
        <Route 
          path='/profile'
          element={<Profile />}
        />
        </Routes> 
    </div>
  );
}

export default App;
