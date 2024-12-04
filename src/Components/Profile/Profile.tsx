import React, { useEffect, useState } from 'react';
import ProfileNav from './ProfileNav';
import styles from './profile.module.css';
import PostGrid from './PostGrid';
import Button from '@mui/material/Button';
import CustomBorderIcon from '../../icons/CustomBorderIcon';
import ReelsIcon from '../../icons/CustomReelsIcon';
import SavedIcon from '../../icons/CustomSavedIcon';
import { LuUserPlus2 } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import { getUserbyId } from '../../Api/api';
import { User } from './UserInterface';

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

const userdata = {
  id: '',
  username: '',
  email: '',
  password: '',
  name: '',
  profilePicture: '',
  bio: '',
  gender: '',
  createdDate: '',
  updatedDate: null,
  followersCount: 0,
  followingCount: 0,
  isActive: true,
  posts: [],
  comments: [],
  likes: [],
  following: [],
  followers: [],
};

export default function Profile() {
  const [userData, setUserData] = useState<User>(userdata);

  useEffect(() => {
    const getData = async () => {
      const data = await getUserbyId();
      setUserData(data);
    };
    getData();
  }, []);

  console.log(userData.name);

  return (
    <div className={styles.profilePage}>
      <ProfileNav username={userData.username} />
      <div className={styles.profileHeader}>
        <ProfileHeader user={userData} />
        <p className={styles.bio}>{user.bio}</p>
        <div className="grid grid-flow-col w-[100%] gap-2 mt-3">
          <Button variant="contained" size="small" className="col-span-10">
            <Link to="editProfile">Edit Profile</Link>
          </Button>
          <Button variant="outlined" size="small" className="col-span-10">
            Share Profile
          </Button>
          <Button variant="outlined" size="small" className="col-span-1 ">
            <LuUserPlus2 size={20} />
          </Button>
        </div>
      </div>
      <div className={styles.customicons}>
        <div className={styles.cusIcon}>
          <CustomBorderIcon />
        </div>
        <div className={styles.cusIcon}>
          <ReelsIcon />
        </div>
        <div className={`${styles.cusIcon} `}>
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
