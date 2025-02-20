import React from 'react';
import styles from '../profile.module.css';
import { Post } from '../../../Pages/HomePage/PostInterface';
import { NavLink, useParams } from 'react-router-dom';

interface ProfilePageProps {
  post: Post[];
  status: string;
  error: null | string;
}

const PostGrid: React.FC<ProfilePageProps> = ({ post, status, error }) => {
  const { userid } = useParams();
  return (
    <>
      {status === 'failed' && (
        <div className="flex justify-center align-middle flex-col mt-4 gap-3">
          {!userid ? (
            <div className="flex flex-col items-center gap-2 p-4">
              <p className="text-red-500 text-sm font-medium text-center">
                {error}
              </p>
              <p className="text-blue-600 text-sm font-semibold cursor-pointer hover:underline">
                Create a new post
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-4">
              <p className="text-gray-500 text-base font-medium text-center">
                🚀 No posts yet! This user hasn&apos;t shared anything.
              </p>
            </div>
          )}
        </div>
      )}
      <div className={styles.postsGrid}>
        {status === 'fulfilled' &&
          post.map((photo, index) => (
            <NavLink to="posts" key={photo.id}>
              <div className={styles.postItem}>
                <img
                  src={`https://localhost:7272${photo.imageUrl}`}
                  alt={`Post ${index + 1}`}
                  className={styles.postImage}
                />
              </div>
            </NavLink>
          ))}
      </div>
    </>
  );
};

export default PostGrid;
