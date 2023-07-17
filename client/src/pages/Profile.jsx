import { useEffect, useState } from "react";
import axios from 'axios'
import { tester } from '../services/testService.js'
import jwt_decode from 'jwt-decode'
const Profile = (props) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const query = new URLSearchParams(window.location.search)
    const token = query.get('token')
    localStorage.setItem('accessToken', token)
    const codedToken = localStorage.getItem('accessToken')
    const decodedToken = jwt_decode(codedToken)
    setUser(decodedToken)

  }, [])
  return (
    <div>
      {console.log(user)}
    </div>
  );
}
 
export default Profile;