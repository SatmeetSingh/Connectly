import Button from '../../utils/Button';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { LiaHomeSolid } from 'react-icons/lia';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaRegComments, FaHeart } from 'react-icons/fa6';
import { TfiSearch } from 'react-icons/tfi';
import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { ImCompass2 } from 'react-icons/im';
import { RxVideo } from 'react-icons/rx';
import { AiOutlineMessage, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { IoReorderThree } from 'react-icons/io5';
import ReelsIcon from '../../icons/CustomReelsIcon';

export default function NavBar() {
  const [isWidth, setIsWidth] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => {
      setIsWidth(window.innerWidth <= 750);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>{isWidth ? <SmallNavBar /> : <LargeNavbar />}</div>;
}

export function LargeNavbar() {
  return (
    <nav className={styles.largenav}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <a href="#">Connecty</a>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/home" className="flex gap-2">
              <LiaHomeSolid size={25} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <a href="#Search" className="flex gap-2">
              <TfiSearch size={25} />
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="#Discover" className="flex gap-2">
              <ImCompass2 size={25} />
              <span>Discover</span>
            </a>
          </li>
          <li>
            <a href="#Reels" className="flex gap-2">
              <RxVideo size={25} />
              <span>Reels</span>
            </a>
          </li>
          <li>
            <a href="#Messages" className="flex gap-2">
              <AiOutlineMessage size={25} />
              <span>Messages</span>
            </a>
          </li>
          <li>
            <a
              href="#notification"
              className="flex gap-2 items-center mb-[-10px] mt-[-10px] ml-[-3px]"
            >
              <IoMdNotificationsOutline size={45} />
              <span>Notification</span>
            </a>
          </li>
          <li>
            <a href="#Create" className="flex gap-2">
              <AiOutlineVideoCameraAdd size={25} />
              <span>Create</span>
            </a>
          </li>
          <li>
            <Link to="/profile" className="flex gap-2">
              <CgProfile size={25} />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <a href="#More" className="flex gap-2">
              <IoReorderThree size={25} />
              <span>More</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export function SmallNavBar() {
  return (
    <nav className={styles.smallnav}>
      <div className={styles.navbar1}>
        <ul className={styles.smallmenu}>
          <li>
            <Link to="/home">
              <LiaHomeSolid size={30} />
            </Link>
          </li>
          <li>
            <TfiSearch size={30} />
          </li>
          <li>
            <FaHeart size={30} />
          </li>
          <li>
            <ReelsIcon />
          </li>
          <li>
            <Link to="/profile">
              <CgProfile size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export const AboveNavBar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.box}>
        <li>
          <TfiSearch size={30} />
        </li>
        <li>
          <div className={styles.logo1}>
            <a href="#">Connecty</a>
          </div>
        </li>
        <li>
          <FaRegComments size={30} />
        </li>
      </ul>
    </div>
  );
};
