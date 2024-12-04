import React from 'react';
import styles from './profile.module.css';
import { FaPlus } from 'react-icons/fa6';
import { User } from './UserInterface';

interface ProfilePageProps {
  user: User;
}

const ProfileHeader: React.FC<ProfilePageProps> = ({ user }) => {
  return (
    <div className={styles.fix}>
      <div className="flex flex-col self-center">
        <div className="flex relative self-center">
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
        <h2 className={styles.username}>{user.username}</h2>
      </div>

      <div className={styles.profileInfo}>
        <div className={styles.stats}>
          <span>
            {user.posts?.length} <p>posts</p>
          </span>
          <span>
            {user.followersCount}
            <p>followers</p>
          </span>
          <span>
            {user.followingCount}
            <p>following</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;