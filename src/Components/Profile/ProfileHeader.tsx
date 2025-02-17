import React from 'react';
import styles from './profile.module.css';
import { FaPlus } from 'react-icons/fa6';
import { User } from './UserInterface';
import Buttons from './Buttons';
import { Link } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';

interface ProfilePageProps {
  user: User;
}

const ProfileHeader: React.FC<ProfilePageProps> = ({ user }) => {
  return (
    <div className={styles.fix}>
      <div className="flex flex-col flex-1">
        <StorySection user={user} />
      </div>

      <div className={`${styles.profileInfo} flex-0`}>
        <div className="flex items-center max-lg:justify-between max-lg:gap-2 gap-10">
          <div className={styles.username}>{user.username}</div>
          <div className="max-md:hidden flex gap-10 max-lg:gap:2">
            <Buttons />
            <div>
              <Link to="settings">
                <BsThreeDots size={25} />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.stats}>
          <div className="opacity-75 text-[16px]">
            <strong>{user.posts?.length} </strong>
            posts
          </div>
          <div className="opacity-75 text-[16px]">
            <strong>{user.followersCount} </strong>
            followers
          </div>
          <div className="opacity-75 text-[16px]">
            <strong>{user.followingCount} </strong>
            following
          </div>
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
    <div className="flex flex-col">
      <div className="flex relative self-end ">
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

export default ProfileHeader;
