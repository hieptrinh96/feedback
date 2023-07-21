import Teams from "./Teams";
const Profile = ({profile}) => {
  return (
    <div>
      {
        profile ?
          profile.map(userInfo =>
            <div key={userInfo.id}>
              <h1> Hi {userInfo.name}!</h1>
            </div>)
          :
          <div>Loading</div>
      }
      <Teams />
    </div>
  );
}
 
export default Profile;