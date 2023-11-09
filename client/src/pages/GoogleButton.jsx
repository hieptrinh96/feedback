import { Link } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { logIn, logOut } from "../services/profileService";
const GoogleButton = () => {
  return (
    <div>
    <button onClick={() => logIn()}>Log in</button>
    </div>
  );
}
 
export default GoogleButton;