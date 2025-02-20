import React, { useCallback, useEffect, useMemo } from 'react';
import styles from './profile.module.css';
import { FaPlus } from 'react-icons/fa6';
import { User } from './UserInterface';
import Buttons, { OtherUserButtons } from './Buttons';
import { Link, useParams } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';
import { AppDispatch, RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFollowing,
  fetchFollowStatus,
  followUser,
  UnfollowUser,
} from '../../Pages/HomePage/FollowSlice';

interface ProfilePageProps {
  user: User;
}

const ProfileHeader: React.FC<ProfilePageProps> = ({ user }) => {
  const userId = useMemo(() => localStorage.getItem('userId'), []);
  const { userid } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isFollowing, followingData } = useSelector(
    (state: RootState) => state.follow
  );

  useEffect(() => {
    if (userid) {
      dispatch(
        fetchFollowStatus({ followerId: `${userId}`, followingId: `${userid}` })
      );
    }
  }, [dispatch, userid, userId]);

  const handleFollow = useCallback(async () => {
    try {
      await dispatch(
        followUser({ followerId: `${userId}`, followingId: user.id })
      ).unwrap();
    } catch (error) {
      console.error('Follow failed', error);
    }
  }, [dispatch, userId, user.id]);

  const handleUnFollow = useCallback(async () => {
    try {
      await dispatch(
        UnfollowUser({ followerId: `${userId}`, followingId: user.id })
      ).unwrap();
    } catch (error) {
      console.error('Unfollow failed', error);
    }
  }, [dispatch, userId, user.id]);

  const handleFollowering = useCallback(async () => {
    try {
      await dispatch(fetchFollowing({ userId: user.id }));
    } catch (error) {
      console.error('Follow failed', error);
    }
  }, [dispatch, user.id]);
  console.log(followingData);
  return (
    <div className={styles.fix}>
      <div className="w-[30%] justify-center align-middle ">
        <StorySection user={user} />
      </div>

      <div className={`${styles.profileInfo} `}>
        <div className="flex items-center max-lg:justify-between max-lg:gap-2 gap-5">
          <div className={styles.username}>{user.username}</div>
          <div className="max-md:hidden flex gap-5 max-lg:gap:2">
            {user.id === userId ? (
              <>
                <Buttons />
                <div>
                  <Link to="settings">
                    <BsThreeDots size={25} />
                  </Link>
                </div>
              </>
            ) : (
              <OtherUserButtons
                isLoading={isLoading}
                isSuccess={isFollowing}
                handleFollow={handleFollow}
                handleUnFollow={handleUnFollow}
              />
            )}
          </div>
        </div>
        <div className={styles.stats}>
          <div className="opacity-85 text-[16px]">
            <strong>{user.postCount} </strong>
            posts
          </div>
          <div className="opacity-85 text-[16px]">
            <strong>{user.followersCount} </strong>
            followers
          </div>
          <button
            className="opacity-85 text-[16px]"
            onClick={handleFollowering}
          >
            <strong>{user.followingCount} </strong>
            following
          </button>
        </div>
        <div>
          <div className={`${styles.bio} max-md:hidden`}>{user.bio}</div>
        </div>
      </div>
    </div>
  );
};

export const StorySection: React.FC<ProfilePageProps> = ({ user }) => {
  return (
    <div className="max-md:flex max-md:flex-col place-items-center">
      <div className="flex relative md:min-w-[150px]">
        {user.profilePicture === '' ? (
          <img
            src="/defaultImage.svg"
            alt={`${user.username}'s profile`}
            className={styles.profilePicture}
          />
        ) : (
          <img
            src={`https://localhost:7272${user.profilePicture}`} // Dynamic URL
            alt="Profile"
            className={styles.profilePicture}
          />
        )}
        <div className={styles.addPhoto}>
          <FaPlus color="white" size={13} />
        </div>
      </div>
      <div className="text-[12px] mt-[-5px] font-semibold md:hidden">
        {user.name}
      </div>
    </div>
  );
};

export default React.memo(ProfileHeader);
