import './index.css'
import SignIn from './components/SignIn'
import SignUp from './components/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
       <Route path="/" element={<SignIn />}  />
       <Route path="/signup" element={<SignUp />}  />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
