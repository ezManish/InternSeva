import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginPopUp from './Components/login/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './Components/editprofile/EditProfile';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  // Check if user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');
    const username = localStorage.getItem('username');
    
    if (token && userId) {
      setUser({
        id: userId,
        username: username || 'User',
        token: token
      });
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('username');
    setUser(null);
  };

  return (
    <div className="App">
      <Navbar 
        setShowLogin={setShowLogin} 
        user={user} 
        handleLogout={handleLogout}
      />
      
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route 
          path="/profile" 
          element={
            user ? 
            <Profile user={user} /> : 
            <div className="auth-required">Please log in to view your profile</div>
          } 
        />
        <Route 
          path='/edit-profile' 
          element={
            user ? 
            <EditProfile user={user} setUser={setUser} /> : 
            <div className="auth-required">Please log in to edit your profile</div>
          }
        />
      </Routes>
      
      {showLogin && (
        <LoginPopUp 
          setShowLogin={setShowLogin} 
          setUser={setUser}
        />
      )}
    </div>
  );
}

export default App;