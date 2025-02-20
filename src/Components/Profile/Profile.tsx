import React, { useEffect } from 'react';
import ProfileNav from './ProfileNav';
import styles from './profile.module.css';
import CustomBorderIcon from '../../icons/CustomBorderIcon';
import ReelsIcon from '../../icons/CustomReelsIcon';
import SavedIcon from '../../icons/CustomSavedIcon';
import ProfileHeader from './ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchData, fetchPostsByUserId } from '../../Pages/HomePage/HomeSlice';
import Buttons from './Buttons';
import { Link } from 'react-router-dom';
import { fetchFollowing } from '../../Pages/HomePage/FollowSlice';
import PostGrid from './PostGrid/PostGrid';

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = window.localStorage.getItem('userId');
  const { userData, postData, status, error } = useSelector(
    (state: RootState) => state.home
  );

  useEffect(() => {
    if (userId && status !== 'fulfilled') {
      dispatch(fetchData({ url: '/users', userId: `${userId}` }));
      dispatch(fetchPostsByUserId({ url: '/Posts/user', userId: `${userId}` }));
      dispatch(fetchFollowing({ userId: `${userId}` }));
    }
  }, [dispatch, userId, status]);

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
      <div className="w-[100%]  border-[1px] border-gray-200 "></div>
      <div className="w-[100%] place-items-center">
        <div className={styles.customicons}>
          <Link to="" className={`flex gap-2  opacity-70 ${styles.cusIcon}`}>
            <CustomBorderIcon />
            <span className="max-md:hidden text-[15px] ">Posts</span>
          </Link>

          <Link
            to="saved"
            className={`flex gap-2 opacity-70 ${styles.cusIcon}`}
          >
            <ReelsIcon />
            <span className="max-md:hidden text-[15px] ">Saved</span>
          </Link>
          <Link
            to="tagged"
            className={`flex gap-2 opacity-70 ${styles.cusIcon}`}
          >
            <SavedIcon />
            <span className="max-md:hidden text-[15px] ">Tagged</span>
          </Link>
        </div>
        {/* Posts Grid */}
        <div className=" py-[2px] border-black">
          <PostGrid post={postData} status={status} error={error} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Profile);
