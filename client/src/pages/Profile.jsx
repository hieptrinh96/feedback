import { useEffect, useState } from "react";
import axios from 'axios'
// import { tester } from '../services/testService.js'
import jwt_decode from 'jwt-decode'
import { Link } from "react-router-dom";
import { firstQuery } from "../services/profileService";
const Profile = (props) => {
  const [user, setUser] = useState(null)
  // useEffect(() => {
  //   const query = new URLSearchParams(window.location.search)
  //   const token = query.get('token')
  //   localStorage.setItem('accessToken', token)
  //   const codedToken = localStorage.getItem('accessToken')
  //   const decodedToken = jwt_decode(codedToken)
  //   setUser(decodedToken)

  // }, [])
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       axios.get(`${process.env.REACT_APP_BACKEND_URL}/profile`).then(data => {
  //         console.log('the data', data)
  //         const newData = data.json()
  //         setUser(newData)
  //       })
  //       // const data = await res.json()
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchUser()
  // }, [])

  // useEffect(() => {
  //   const fetchUser = async() => {
  //     try {
  //       const token = localStorage.getItem('googleAuthToken')      
  //     } catch(err) {
  //       console.log(err)
  //     }
  //   }
  // })
  useEffect(() => {
    const fetchData = async () => {
      const res = await firstQuery()
      setUser(res)
    }
    fetchData()
  }, [])
  return (
    // <button><Link to={`${process.env.REACT_APP_BACKEND_URL}/profile`}>click me</Link></button>
    <div>{console.log('user = ', user)}</div>
  );
}
 
export default Profile;