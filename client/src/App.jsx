import './App.css';
import GoogleButton from './pages/GoogleButton.jsx';
import Profile from './pages/Profile.jsx';
import Teams from './pages/Teams';
import Navbar from './pages/NavBar.jsx'
import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import * as profileService from './services/profileService';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await profileService.fetchUser()
      if (userInfo) {
        setUser(userInfo)
        console.log(user)
      }
      else console.log('No user info returned')
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <Navbar profile={user}/>
      <Routes>
        <Route 
          path='/profile'
          element={<Profile profile={user}/>}
        />
        </Routes> 
    </div>
  );
}

export default App;
