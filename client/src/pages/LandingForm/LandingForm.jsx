
import './LandingFormCSS.css'
const LandingForm = () => {
  return (
    <div className='inputContainer'>
      <h2>Hello</h2>
      <form action="">
        <label>
          Please enter your email: <input name="name"/>
          <button type='submit'>Enter</button>
          </label>
      </form>
    </div>
  );
}
 
export default LandingForm;