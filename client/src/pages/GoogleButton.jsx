import { Link } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { logIn, logOut } from "../services/profileService";
const GoogleButton = ({profile}) => {
  return (
    <div>
      {
        profile ? 
        <>
        <button onClick={() => logOut()}>Log Out</button>
        </>
        :
        <>
        <button onClick={() => logIn()}>Log in</button>
        </>
      }
    </div>
  );
}
 
export default GoogleButton;