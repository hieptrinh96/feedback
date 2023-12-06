const AddUser = () => {
  return (
    <div>
      <form action="">
        <label>Name: <input type="name" name="name" /></label>
        <label>Email: <input  type="email" name="email"/></label>
        <label>Cohort: <input type="cohort" name="cohort" /></label>
        <label>Current Team: <input type="current_team" name="current_team" /></label>
        <label>SDU: <input type="sdu" name="sdu" /></label>
      </form>
    </div>
  );
}
 
export default AddUser;