import './App.css';
import GoogleButton from './pages/GoogleButton.jsx';
import Profile from './pages/Profile.jsx';
import Teams from './pages/Teams';
import {Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { fetchUser } from './services/profileService';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await fetchUser()
      setUser(userInfo)
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route 
          path='/'
          element={<GoogleButton />}
        />
        <Route 
          path='/profile'
          element={<Profile profile={user}/>}
        />
        </Routes> 
    </div>
  );
}

export default App;
