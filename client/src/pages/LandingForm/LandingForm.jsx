import './LandingFormCSS.css'
import { useState, useEffect } from 'react';

const LandingForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // this is where you put the function to look at email
  }
  return (
    <div className='inputContainer'>
      <h2>Hello</h2>
      <form onSubmit={"name of function"}>
        <label>
          Please enter your email: 
          <input 
            name="email"
            type='text'
            // onChange={(event) => setEmail(event.target.value)}
          />
          <button type='submit'>Enter</button>
        </label>
      </form>
    </div>
  );
}

export default LandingForm;