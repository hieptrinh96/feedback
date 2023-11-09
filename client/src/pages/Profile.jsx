import Teams from "./Teams";
const Profile = ({profile}) => {
  let imageSource = profile ? profile.picture : 'No Profile yet'
  return (
    <div>
      <Teams />
      <img src={imageSource} alt="" />
    </div>
  );
}
 
export default Profile;