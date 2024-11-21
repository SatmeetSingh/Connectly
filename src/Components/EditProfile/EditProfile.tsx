import React from 'react';
import styles from './EditProfile.module.css';
import { RxCross2 } from 'react-icons/rx';
import { GoCheck } from 'react-icons/go';
import { Link } from 'react-router-dom';
import DefaultProfile from '../../icons/CustomDefaultimage';

export default function EditProfile() {
  return (
    <div className={styles.EditProfile}>
      <div>
        <div className={styles.top}>
          <Link to="/profile">
            <RxCross2 size={30} />
          </Link>
          <p>Edit Profile</p>
          <Link to="/profile">
            <GoCheck size={30} color="blue" />
          </Link>
        </div>
      </div>
      <div className={styles.imageSection}>
        <img
          src="defaultImage.svg"
          alt={`profile`}
          className={styles.profilePicture}
        />
        <p className="text-lg font-semibold text-blue-600  ">
          Change profile photo
        </p>
      </div>
      <nav className="w-[95%] flex flex-col gap-5 mt-5">
        <input type="text" className={styles.input} placeholder="Name" />
        <input type="text" className={styles.input} placeholder="username" />
        <input type="text" className={styles.input} placeholder="Bio" />
        <input type="text" className={styles.input} placeholder="Gender" />
      </nav>
      <div className="mt-3">
        <Link to="/home" className="text-blue-600">
          Add Link
        </Link>
      </div>
    </div>
  );
}
