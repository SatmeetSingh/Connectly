import React, { useEffect } from 'react';
import ProfileNav from './ProfileNav';
import styles from './profile.module.css';
import CustomBorderIcon from '../../icons/CustomBorderIcon';
import ReelsIcon from '../../icons/CustomReelsIcon';
import SavedIcon from '../../icons/CustomSavedIcon';
import ProfileHeader from './ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchData } from '../../Pages/HomePage/HomeSlice';
import Buttons from './Buttons';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = window.localStorage.getItem('userId');
  const { userData } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(fetchData({ url: '/users', userId: `${userId}` }));
  }, [dispatch, userId]);

  return (
    <div className={styles.profilePage}>
      <ProfileNav username={userData.username} />
      <div className={styles.profileHeader}>
        <ProfileHeader user={userData} />
        <p className={`${styles.bio} md:hidden`}>{userData.bio}</p>
        <div className="md:hidden">
          <Buttons />
        </div>
      </div>
      <div className="mt-12 w-[100%]  border-[1px] border-black "></div>
      <div className="w-[100%] place-items-center">
        <div className={styles.customicons}>
          <div className={`flex gap-2 opacity-70 ${styles.cusIcon}`}>
            <Link to="user-post">
              <CustomBorderIcon />
            </Link>
            <span className="max-md:hidden text-[18px] ">Posts</span>
          </div>
          <div className={`flex gap-2 opacity-70 ${styles.cusIcon}`}>
            <ReelsIcon />
            <span className="max-md:hidden text-[18px] ">Saved</span>
          </div>
          <div className={`flex gap-2 opacity-70 ${styles.cusIcon}`}>
            <SavedIcon />
            <span className="max-md:hidden text-[18px] ">Tagged</span>
          </div>
        </div>
        {/* Posts Grid */}

        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
