import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { Home } from './Pages/HomePage/Home';
import LoginPage from './Pages/Auth/LoginPage';
import SignOutPage from './Pages/Auth/SignupPage';
import Profile from './Components/Profile/Profile';
import EditProfile from './Components/EditProfile/EditProfile';
import Settings from './Components/Settings/Settings';
import Applayout from './Pages/AppLayout/Applayout';
import PopularPage from './Pages/Popular/PopularPage';
import SearchPage from './Pages/SearchPage/SearchPage';
import NotificationPage from './Pages/Notification/NotificationPage';
import ProtectedRoute from './utils/protectedRoute/ProtectedRoute';
import Error from './utils/Error';

function App() {
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  const userId = window.localStorage.getItem('userId');

  return (
    <div className="h-[100%] min-[750px]:flex min-[750px]:gap-3">
      <BrowserRouter>
        <Routes>
          {/* unauthoized route */}
          {!isLoggedIn && (
            <>
              <Route path="/" element={<LoginPage />} />
              <Route path="signup" element={<SignOutPage />} />
            </>
          )}

          {/* protectedRoute */}
          <Route element={<ProtectedRoute />}>
            <Route path="signup" element={<Navigate to={`/${userId}`} />} />
            <Route path="/" element={<Navigate to={`/${userId}`} />} />
            <Route path="/:userId" element={<Applayout />}>
              <Route path="" element={<Home />} />
              <Route path="notification" element={<NotificationPage />} />
              <Route path="popular" element={<PopularPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="profile" element={<Profile />} />
              <Route path="profile/EditProfile" element={<EditProfile />} />
              <Route path="profile/settings" element={<Settings />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
