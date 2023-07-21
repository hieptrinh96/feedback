import { Link } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { logIn } from "../services/profileService";
const GoogleButton = () => {
  return (
    <>
    <button><Link to={`${process.env.REACT_APP_BACKEND_URL}/auth/google`}>Sign In</Link></button>
    {/* <button onClick={() => logIn()}>Log in</button> */}
    </>
  );
}
 
export default GoogleButton;