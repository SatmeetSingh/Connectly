import styles from './post.module.css';
import { FaEllipsisVertical } from 'react-icons/fa6';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa6';
import { TbLocationShare } from 'react-icons/tb';
import { VscChromeRestore } from 'react-icons/vsc';
import { useState } from 'react';
import { posts, Users } from '../../utils/MockUserData';

const text =
  ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero atrecusandae eius delectus animi iusto placeat corrupti totam, quaeratratione ullam voluptates consectetur explicabo nihil aliquam laborum, tenetur ipsum iste.';

export default function Post() {
  const maxlength = 70;
  const [isExpamded, setIsExpended] = useState(false);
  function ToggleText() {
    setIsExpended(!isExpamded);
  }
  return (
    <div className={styles.post}>
      <div className={styles.postbox}>
        <div className={styles.header}>
          <div className={styles.headerleft}>
            <img
              src={Users[0].profilePicture}
              alt="ProfileImage"
              className={styles.profileCircle}
            />
            <p>{posts[0].username}</p>
          </div>
          <p>
            <FaEllipsisVertical size={25} />
          </p>
        </div>
        <div className={styles.imagesection}>
          <img src={posts[0].image} alt="flowerImage" className={styles.img} />
        </div>

        <div className={styles.userclick}>
          <ul>
            <li>
              <AiFillHeart size={25} />
              <span>{posts[0].likes}</span>
            </li>
            <li>
              <FaRegComment size={25} />
              <span>{posts[0].comments}</span>
            </li>
            <li>
              <TbLocationShare size={25} />
              <span>301</span>
            </li>
          </ul>
          <div>
            <VscChromeRestore size={25} />
          </div>
        </div>
        <div className={styles.datatext}>
          <span>{posts[0].username}</span>
          {isExpamded
            ? posts[0].caption
            : posts[0].caption.slice(0, 50).trimEnd()}
          <button className={styles.readMoreBtn} onClick={ToggleText}>
            {!isExpamded ? '?more' : 'less'}
          </button>
        </div>
        <div>View all comments</div>
      </div>
    </div>
  );
}
