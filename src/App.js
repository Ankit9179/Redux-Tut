import './App.css';
import User from './User';

function App() {
  return (
    <div className="App">
      <User
       data = {{
        name:'ankit',
        age:'22',
        email:'ankit@123.com'
      }} 
       />
    </div>
  );
}

export default App;
