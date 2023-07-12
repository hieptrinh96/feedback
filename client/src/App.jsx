import './App.css';
import GoogleButton from './pages/GoogleButton.jsx';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Routes>
        <Route 
          path='/test'
          element={<GoogleButton />}
        />
        </Routes> 
    </div>
  );
}

export default App;
