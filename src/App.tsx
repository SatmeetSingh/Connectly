import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './Pages/HomePage/Home';
import LoginPage from './Pages/Auth/LoginPage';
import SignOutPage from './Pages/Auth/SignupPage';
import Profile from './Components/Profile/Profile';
import NavBar from './Components/Navbar/Navbar';
import EditProfile from './Components/EditProfile/EditProfile';
import Settings from './Components/Settings/Settings';

function App() {
  return (
    <div className="h-[100%] min-[750px]:flex min-[750px]:gap-3">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="EditProfile" element={<EditProfile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="signup" element={<SignOutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
