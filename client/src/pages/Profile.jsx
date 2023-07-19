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
    </div>
  );
}
 
export default Profile;