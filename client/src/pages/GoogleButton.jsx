import { GoogleLogin, useGoogleLogin } from "@react-oauth/google"
import { Link } from "react-router-dom";
const GoogleButton = () => {
  return (
    <button><Link to={`${process.env.REACT_APP_BACKEND_URL}/auth/google`}>Sign In</Link></button>
  );
}
 
export default GoogleButton;