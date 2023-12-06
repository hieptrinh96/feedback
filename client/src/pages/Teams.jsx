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
      <div id='Team Container'>
        <p>{element.Name}</p>
        <p>{element.Cohort}</p>
        <p>{element.Current_Team}</p>
        <p>{element.SDU}</p>
      </div>

    </div>

   );
}
 
export default Teams;