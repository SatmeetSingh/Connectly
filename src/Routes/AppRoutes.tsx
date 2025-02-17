import React from 'react';
import { lazy, Suspense } from 'react';
import Error from '../utils/Error';
import SuspenseLoading from '../utils/LazyLoading/Suspense/Suspense';
const LoginPage = lazy(() => import('../Pages/Auth/LoginPage'));
const SignOutPage = lazy(() => import('../Pages/Auth/SignupPage'));
const Home = lazy(() => import('../Pages/HomePage/Home'));
const Applayout = lazy(() => import('../Pages/AppLayout/Applayout'));
const ProtectedRoute = lazy(
  () => import('../utils/protectedRoute/ProtectedRoute')
);
// import { RotateLeft } from '@mui/icons-material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoutePath } from './RoutePath/routes';
import UserPostsGrid from '../Components/Profile/PostGrid/UserPostsGrid';
const Profile = lazy(() => import('../Components/Profile/Profile'));

export default function AppRoutes() {
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  const userId = window.localStorage.getItem('userId');

  console.log(typeof isLoggedIn);
  return (
    <div className="h-[100%] ">
      <BrowserRouter>
        <Suspense fallback={<SuspenseLoading />}>
          <Routes>
            {/* unauthoized route */}
            {!isLoggedIn ? (
              <>
                <Route path="/" element={<LoginPage />} />
                <Route path="signup" element={<SignOutPage />} />
              </>
            ) : (
              <>
                <Route
                  path="/"
                  element={<Navigate to={`/${userId}`} replace />}
                />
              </>
            )}

            {/* protectedRoute */}
            <Route element={<ProtectedRoute />}>
              <Route path="/:userId" element={<Applayout />}>
                <Route path="" element={<Home />} />
                {ProtectedRoutePath.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
                <Route path="profile" element={<Profile />}>
                  <Route index element={<UserPostsGrid />} />
                </Route>
              </Route>
            </Route>

            {/* Catch-all for undefined routes */}
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
