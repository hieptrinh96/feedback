import Teams from "./Teams";
import {logOut} from '../services/profileService'
const Profile = ({profile}) => {
  let imageSource = profile ? profile.picture : 'No Profile yet'
  return (
    <div>
      <button onClick={() => logOut()}>Log out</button>
      <Teams />
      <img src={imageSource} alt="" />
    </div>
  );
}
 
export default Profile;