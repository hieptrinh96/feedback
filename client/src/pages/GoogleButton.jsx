import { Link } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode'
const GoogleButton = () => {
  return (
    <button><Link to={`${process.env.REACT_APP_BACKEND_URL}/auth/google`}>Sign In</Link></button>

  );
}
 
export default GoogleButton;