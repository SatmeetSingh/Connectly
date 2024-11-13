import Button from '../../utils/Button';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { LiaHomeSolid } from 'react-icons/lia';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaRegComments, FaHeart } from 'react-icons/fa6';
import { TfiSearch } from 'react-icons/tfi';
import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';

export default function NavBar() {
  const [isWidth, setIsWidth] = useState(window.innerHeight <= 850);

  useEffect(() => {
    const handleResize = () => {
      setIsWidth(window.innerWidth <= 850);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>{isWidth ? <SmallNavBar /> : <LargeNavbar />}</div>;
}

export function LargeNavbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <a href="#">Connecty</a>
        </div>
        <ul className={styles.menu}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Discover">Discover</a>
          </li>
          <li>
            <a href="#Category">Message</a>
          </li>
          <li>
            <a href="#Contact">Match</a>
          </li>
        </ul>
        <ul className={styles.menu}>
          <li>
            <IoMdNotificationsOutline size={30} />
          </li>
          <li>
            <CgProfile size={30} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export function SmallNavBar() {
  return (
    <>
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
      <nav className={styles.smallnav}>
        <div className={styles.navbar1}>
          <ul className={styles.smallmenu}>
            <li>
              <LiaHomeSolid size={30} />
            </li>
            <li>
              <TfiSearch size={30} />
            </li>
            <li>
              <FaHeart size={30} />
            </li>
            <li>
              <IoMdNotificationsOutline size={30} />
            </li>
            <li>
              <CgProfile size={30} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
