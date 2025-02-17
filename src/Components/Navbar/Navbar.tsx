import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { LiaHomeSolid } from 'react-icons/lia';
import { IoIosNotifications } from 'react-icons/io';
import { TfiSearch } from 'react-icons/tfi';
import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { ImCompass2 } from 'react-icons/im';
import { RxVideo } from 'react-icons/rx';
import { AiOutlineMessage, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { TbBrandMessenger } from 'react-icons/tb';
import { IoReorderThree } from 'react-icons/io5';
import ReelsIcon from '../../icons/CustomReelsIcon';
import CustonCreateIcon from '../../icons/CustonCreateIcon';

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
            <Link to="" className="flex gap-3">
              <LiaHomeSolid size={30} />
              <span className={styles.largeNavText}>Home</span>
            </Link>
          </li>
          <li>
            <Link to="popular" className="flex gap-3">
              <TfiSearch size={30} />
              <span className={styles.largeNavText}>Search</span>
            </Link>
          </li>
          <li>
            <a href="#Discover" className="flex gap-3">
              <ImCompass2 size={30} />
              <span className={styles.largeNavText}>Discover</span>
            </a>
          </li>
          <li>
            <a href="#Reels" className="flex gap-3">
              <RxVideo size={30} />
              <span className={styles.largeNavText}>Reels</span>
            </a>
          </li>
          <li>
            <a href="#Messages" className="flex gap-3">
              <AiOutlineMessage size={30} />
              <span className={styles.largeNavText}>Messages</span>
            </a>
          </li>
          <li>
            <Link to="notification" className="flex gap-3">
              <IoIosNotifications size={30} />
              <span className={styles.largeNavText}>Notification</span>
            </Link>
          </li>
          <li>
            <a href="#Create" className="flex gap-3">
              <AiOutlineVideoCameraAdd size={30} />
              <span className={styles.largeNavText}>Create</span>
            </a>
          </li>
          <li>
            <Link to="profile" className="flex gap-3">
              <CgProfile size={30} />
              <span className={styles.largeNavText}>Profile</span>
            </Link>
          </li>
          <li>
            <a href="#More" className="flex gap-3">
              <IoReorderThree size={30} />
              <span className={styles.largeNavText}>More</span>
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
            <Link to="">
              <LiaHomeSolid size={29} />
            </Link>
          </li>
          <li>
            <Link to="popular">
              <TfiSearch size={27} />
            </Link>
          </li>
          <li>
            <CustonCreateIcon />
          </li>
          <li>
            <ReelsIcon />
          </li>
          <li>
            <Link to="profile">
              <CgProfile size={27} />
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
          <div className={styles.logo1}>
            <a href="#">Connecty</a>
          </div>
        </li>
        <li className="flex align-middle justify-center gap-3 ">
          <Link to="notification">
            <CiHeart size={24} />
          </Link>
          <TbBrandMessenger size={24} />
        </li>
      </ul>
    </div>
  );
};
