import * as profileService from '../services/profileService'
import GoogleButton from './GoogleButton';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({profile}) => {
  return (
    <div>
      {
        profile ? 
        <>
          <Link to={'/profile'}>My Profile</Link>
          <button onClick={() => profileService.logOut()}>Sign Out</button>
          {console.log(profile)}
        </>
        : 
        <>
          <GoogleButton />
        </>
      }
  </div>
  );
}
 
export default Navbar;