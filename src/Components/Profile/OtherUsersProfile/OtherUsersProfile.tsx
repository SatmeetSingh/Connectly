import React, { useCallback, useEffect, useMemo } from 'react';
import ProfileNav from '../ProfileNav';
import styles from '../profile.module.css';
import PostGrid from '../PostGrid/PostGrid';
import CustomBorderIcon from '../../../icons/CustomBorderIcon';
import ReelsIcon from '../../../icons/CustomReelsIcon';
import SavedIcon from '../../../icons/CustomSavedIcon';
import ProfileHeader from '../ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import {
  fetchData,
  fetchPostsByUserId,
} from '../../../Pages/HomePage/HomeSlice';
import { OtherUserButtons } from '../Buttons';
import { Link, useParams } from 'react-router-dom';
import {
  fetchFollowStatus,
  followUser,
  UnfollowUser,
} from '../../../Pages/HomePage/FollowSlice';

const OtherUserProfile = () => {
  const userId = useMemo(() => localStorage.getItem('userId'), []);
  const { userid } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { userData, postData, status, error } = useSelector(
    (state: RootState) => state.home
  );
  const { isLoading, isFollowing } = useSelector(
    (state: RootState) => state.follow
  );

  useEffect(() => {
    if (userid) {
      dispatch(fetchData({ url: '/users', userId: `${userid}` }));
      dispatch(
        fetchFollowStatus({ followerId: `${userId}`, followingId: `${userid}` })
      );
    }
  }, [dispatch, userid, userId, isFollowing]);

  useEffect(() => {
    if (userid) {
      dispatch(fetchPostsByUserId({ url: '/Posts/user', userId: `${userid}` }));
    }
  }, [dispatch, userid]);

  // Memoized follow/unfollow handlers to prevent unnecessary re-creations
  const handleFollow = useCallback(async () => {
    try {
      await dispatch(
        followUser({ followerId: `${userId}`, followingId: `${userid}` })
      ).unwrap();
    } catch (error) {
      console.error('Follow failed', error);
    }
  }, [dispatch, userId, userid]);

  const handleUnFollow = useCallback(async () => {
    try {
      await dispatch(
        UnfollowUser({ followerId: `${userId}`, followingId: `${userid}` })
      ).unwrap();
    } catch (error) {
      console.error('Unfollow failed', error);
    }
  }, [dispatch, userId, userid]);

  return (
    <div className={styles.profilePage}>
      <ProfileNav username={userData.username} />
      <div className={styles.profileHeader}>
        <ProfileHeader user={userData} />
        <p className={`${styles.bio} md:hidden`}>{userData.bio}</p>
        <div className="md:hidden">
          <OtherUserButtons
            isLoading={isLoading}
            isSuccess={isFollowing}
            handleFollow={handleFollow}
            handleUnFollow={handleUnFollow}
          />
        </div>
      </div>
      <div className="w-[100%]  border-[1px] border-gray-200 "></div>
      <div className={styles.customicons}>
        <Link to="" className={`flex gap-2  opacity-70 ${styles.cusIcon}`}>
          <CustomBorderIcon />
          <span className="max-md:hidden text-[15px] ">Posts</span>
        </Link>

        <Link to="saved" className={`flex gap-2 opacity-70 ${styles.cusIcon}`}>
          <ReelsIcon />
          <span className="max-md:hidden text-[15px] ">Saved</span>
        </Link>
        <Link to="tagged" className={`flex gap-2 opacity-70 ${styles.cusIcon}`}>
          <SavedIcon />
          <span className="max-md:hidden text-[15px] ">Tagged</span>
        </Link>
      </div>
      {/* Posts Grid */}
      <div>
        <PostGrid post={postData} status={status} error={error} />
      </div>
    </div>
  );
};

export default React.memo(OtherUserProfile);
