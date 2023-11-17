import * as profileService from '../services/profileService'
import { useState, useEffect } from 'react';
const Teams = ({element}) => {
  const [user, setUser] = useState('')
  useEffect(() =>{
    const fetchTeam = async () => {
      
    }
  })
  return ( 
    <div>
      <h2>These are your team members that still need reviews</h2>
      <p>{element.Name}</p>
    </div>

   );
}
 
export default Teams;