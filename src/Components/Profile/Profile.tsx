import React from 'react';
import ProfileNav from './ProfileNav';
import styles from './profile.module.css';
import PostGrid from './PostGrid';
import Button from '@mui/material/Button';
import CustomBorderIcon from '../../icons/CustomBorderIcon';
import ReelsIcon from '../../icons/CustomReelsIcon';
import SavedIcon from '../../icons/CustomSavedIcon';
import { LuUserPlus2 } from 'react-icons/lu';
import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const user = {
  username: 'Satmeet_Singh',
  Name: 'Satmeet Singh',
  bio: 'Photographer & Traveler 🌍 | Sharing moments 📸',
  profilePicture: 'https://via.placeholder.com/150', // Replace with actual profile pic URL
  posts: 120,
  followers: 1020,
  following: 300,
  photos: [
    'https://via.placeholder.com/150/1', // Replace with actual URLs
    'https://via.placeholder.com/150/2',
    'https://via.placeholder.com/150/3',
    'https://via.placeholder.com/150/4',
    'https://via.placeholder.com/150/5',
    'https://via.placeholder.com/150/6',
  ],
};

export default function Profile() {
  return (
    <div className={styles.profilePage}>
      <ProfileNav username={user.username} />
      <div className={styles.profileHeader}>
        <div className="flex flex-col self-center">
          <div className="flex self-center relative min-[]">
            <img
              src={user.profilePicture}
              alt={`${user.username}'s profile`}
              className={styles.profilePicture}
            />
            <div className={styles.addPhoto}>
              <FaPlus color="white" size={13} />
            </div>
          </div>
          <h2 className={styles.username}>{user.Name}</h2>
        </div>

        <div className={styles.profileInfo}>
          <div className={styles.stats}>
            <span>
              {user.posts} <p>posts</p>
            </span>
            <span>
              {user.followers}
              <p>followers</p>
            </span>
            <span>
              {user.following}
              <p>following</p>
            </span>
          </div>
        </div>
        <p className={styles.bio}>{user.bio}</p>
        <div className="flex  justify-between w-[95%] mt-4">
          <Button variant="contained" size="small">
            <Link to="/editProfile">Edit Profile</Link>
          </Button>
          <Button variant="outlined" size="small">
            Share Profile
          </Button>
          <Button variant="outlined" size="small">
            <LuUserPlus2 size={20} />
          </Button>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex justify-center align-middle flex-1">
          <CustomBorderIcon />
        </div>
        <div className="flex justify-center align-middle flex-1">
          <ReelsIcon />
        </div>
        <div className="flex justify-center align-middle flex-1">
          <SavedIcon />
        </div>
      </div>
      {/* Posts Grid */}
      <div className="border-t-[1px] py-1 border-black">
        <PostGrid user={user} />
      </div>
    </div>
  );
}
