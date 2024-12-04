import React from 'react';
import styles from './profile.module.css';
import { User } from './UserInterface';

interface ProfilePageProps {
  user: User;
}

const PostGrid: React.FC<ProfilePageProps> = ({ user }) => {
  return (
    <div className={styles.postsGrid}>
      {user.photos.map((photo, index) => (
        <div key={index} className={styles.postItem}>
          <img
            src={photo}
            alt={`Post ${index + 1}`}
            className={styles.postImage}
          />
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
