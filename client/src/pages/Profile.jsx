import * as profileService from '../services/profileService'
import Teams from "./Teams";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation()
  const data = location.state?.data
  // const [teamMember, setTeamMember] = useState([])
  // useEffect(() => {
  //   const fetchTeam = async () => {
  //     const teammates = await profileService.fetchTeam()
  //     console.log(teammates)
  //     if (teammates) {
  //       setTeamMember(teammates)
  //       console.log('These are the team members', teamMember)
  //     }
  //     else console.log('No teammates found')
  //   }
  //   fetchTeam()
  // }, [])
  // useEffect(() => {
  //   console.log('Profile component received', element)
  // }, [element])
  return (
    <div>
      {data.map(info =>
          <div key={info.id}>
            <Teams element={info}/>
            <p></p>
          </div>
        )}

      {/* {
        profile ? 
        <>
        <Teams /> 
        {teamMember.map(person =>
          <div key={person.id}>
            <p>{person.Name}</p>
            <p>{person.Cohort}</p>
            <p>{person.Current_Team}</p>
          </div>
          )}
        </>
        : 
        <>
        User isn't signed in
        </>
        
      } */}
    </div>
  );
}
 
export default Profile;