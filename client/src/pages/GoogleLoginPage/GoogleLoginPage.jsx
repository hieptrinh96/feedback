import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import Auth from '../Auth/Auth';
import axios from 'axios'
const GoogleLoginPage = (props) => {
  return (
    <div><button onClick={() => props.googleLogin()}>Log in</button></div>
  );
};

export default GoogleLoginPage;