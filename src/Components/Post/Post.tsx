import styles from './post.module.css';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { AiFillHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa6';
import { TbLocationShare } from 'react-icons/tb';
import { VscChromeRestore } from 'react-icons/vsc';
import React, { useEffect, useState } from 'react';
import { Post } from '../../Pages/HomePage/PostInterface';
import { User } from '../Profile/UserInterface';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import {
  AddLikeToPost,
  FetchLikesByPost,
} from '../../Pages/HomePage/HomeSlice';

interface PostProp {
  post: Post;
  user: User;
}

const PostBlock: React.FC<PostProp> = ({ post, user }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { count } = useSelector((state: RootState) => state.home);
  const [isExpamded, setIsExpended] = useState(false);

  useEffect(() => {
    dispatch(FetchLikesByPost({ url: '/likes', postId: post.id }));
  }, [dispatch, count, post.id]);

  async function handleLikes() {
    try {
      await dispatch(
        AddLikeToPost({ url: '/likes', userId: user.id, postId: post.id })
      ).unwrap();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  function ToggleText() {
    setIsExpended(!isExpamded);
  }
  return (
    <div className={styles.post}>
      <div className={styles.postbox}>
        <div className={styles.header}>
          <div className={styles.headerleft}>
            <img
              src={`https://localhost:7272${user.profilePicture}`}
              alt="ProfileImage"
              className={styles.profileCircle}
            />
            <p>{user.username}</p>
          </div>
          <p>
            <FaEllipsisVertical size={25} />
          </p>
        </div>
        <div className={styles.imagesection}>
          <img
            src={`https://localhost:7272${post.imageUrl}`}
            alt="flowerImage"
            className={styles.img}
          />
        </div>

        <div className={styles.userclick}>
          <ul>
            <li>
              <button onClick={handleLikes}>
                <AiFillHeart size={25} />
              </button>
              <span>{count}</span>
            </li>
            <li>
              <FaRegComment size={25} />
              <span>{post.commentCount}</span>
            </li>
            <li>
              <TbLocationShare size={25} />
              <span>{post.shareCount}</span>
            </li>
          </ul>
          <div>
            <VscChromeRestore size={25} />
          </div>
        </div>
        <div className={styles.datatext}>
          <span>{user.username}</span>
          {isExpamded ? post.content : post.content.slice(0, 50).trimEnd()}
          <button className={styles.readMoreBtn} onClick={ToggleText}>
            {!isExpamded && '... more'}
          </button>
        </div>
        <div>View all comments</div>
      </div>
    </div>
  );
};

export default PostBlock;
