import Teams from "./Teams";
const Profile = ({profile}) => {
  return (
    <div>
      {
        profile ? 
        <>
        <Teams /> 
        </>
        : 
        <>
        User isn't signed in
        </>
        
      }
    </div>
  );
}
 
export default Profile;