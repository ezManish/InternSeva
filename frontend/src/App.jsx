import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import LoginPopUp from './Components/login/Login';
import Home from './pages/Home';
import {Routes , Route} from 'react-router-dom'
import Profile from './pages/Profile';
import EditProfile from './Components/editprofile/EditProfile';
function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/edit-profile' element={<EditProfile/>}/>
      </Routes>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
    </div>
  );
}

export default App;
