import { PROTECTED_ROUTES } from './RoutePath';
import OtherUserProfile from '../../Components/Profile/OtherUsersProfile';
import OtherUserPosts from '../../Components/UserPosts/OtherUsersPost';
import { lazy } from 'react';

const UserPosts = lazy(() => import('../../Components/UserPosts/UserPosts'));
const Profile = lazy(() => import('../../Components/Profile/Profile'));
const EditProfile = lazy(
  () => import('../../Components/EditProfile/EditProfile')
);
import Settings from '../../Components/Settings/Settings';
const PopularPage = lazy(() => import('../../Pages/Popular/PopularPage'));
const SearchPage = lazy(() => import('../../Pages/SearchPage/SearchPage'));
import NotificationPage from '../../Pages/Notification/NotificationPage';

const userId = window.localStorage.getItem('userId');

export const ProtectedRoutePath = [
  { path: PROTECTED_ROUTES.NotificationPage, element: <NotificationPage /> },
  { path: PROTECTED_ROUTES.PopularPage, element: <PopularPage /> },
  { path: PROTECTED_ROUTES.SearchPage, element: <SearchPage /> },
  { path: PROTECTED_ROUTES.OtherUserProfile, element: <OtherUserProfile /> },
  { path: PROTECTED_ROUTES.OtherUserPosts, element: <OtherUserPosts /> },
  { path: PROTECTED_ROUTES.Profile, element: <Profile userId={userId} /> },
  { path: PROTECTED_ROUTES.UserPosts, element: <UserPosts /> },
  { path: PROTECTED_ROUTES.EditProfile, element: <EditProfile /> },
  { path: PROTECTED_ROUTES.Settings, element: <Settings /> },
];
