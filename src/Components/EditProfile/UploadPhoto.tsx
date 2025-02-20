import React from 'react';
import styles from './EditProfile.module.css';

export default function UploadPhoto(prop: {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <input
        type="file"
        id="profilePicture"
        className="hidden"
        onChange={prop.handleFileChange}
      />
      <label htmlFor="profilePicture" className={styles.picture}>
        Change Profile
      </label>
    </div>
  );
}
