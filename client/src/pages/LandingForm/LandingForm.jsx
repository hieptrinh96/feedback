import './LandingFormCSS.css'
import Profile from '../Profile';
import * as profileService from '../../services/profileService'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingForm = () => {
  const [email, setEmail] = useState([])
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    // this is where you put the function to look at email
    const emailData = e.target.email.value
    const data = await profileService.fetchTeam(emailData)
    setEmail(data)
    navigate('/profile', {state: {data}})
  }
  return (
    <div className='inputContainer'>
      <h2>Hello</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Please enter your email: 
          <input 
            name="email"
            type='email'
          />
          <button type='submit'>Enter</button>
        </label>
      </form>
    </div>
  );
}

export default LandingForm;