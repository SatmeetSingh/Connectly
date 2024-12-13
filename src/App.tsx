import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import OtherUserProfile from './Components/Profile/OtherUsersProfile';
import SuspenseLoading from './utils/LazyLoading/Suspense/Suspense';
const Home = lazy(() => import('./Pages/HomePage/Home'));
const LoginPage = lazy(() => import('./Pages/Auth/LoginPage'));
const SignOutPage = lazy(() => import('./Pages/Auth/SignupPage'));
const Profile = lazy(() => import('./Components/Profile/Profile'));
const EditProfile = lazy(() => import('./Components/EditProfile/EditProfile'));
const Settings = lazy(() => import('./Components/Settings/Settings'));
const Applayout = lazy(() => import('./Pages/AppLayout/Applayout'));
const PopularPage = lazy(() => import('./Pages/Popular/PopularPage'));
const SearchPage = lazy(() => import('./Pages/SearchPage/SearchPage'));
const NotificationPage = lazy(
  () => import('./Pages/Notification/NotificationPage')
);
const ProtectedRoute = lazy(
  () => import('./utils/protectedRoute/ProtectedRoute')
);
const Error = lazy(() => import('./utils/Error'));

function App() {
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  const userId = window.localStorage.getItem('userId');

  return (
    <div className="h-[100%] min-[750px]:flex min-[750px]:gap-3">
      <BrowserRouter>
        <Suspense fallback={<SuspenseLoading />}>
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
                <Route path="search/:userid" element={<OtherUserProfile />} />
                <Route path="profile" element={<Profile userId={userId} />} />
                <Route path="profile/EditProfile" element={<EditProfile />} />
                <Route path="profile/settings" element={<Settings />} />
              </Route>
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
