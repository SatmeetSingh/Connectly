import styles from './settings.module.css';
import React from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className={styles.settings}>
      <div className={styles.arrow}>
        <Link to="/profile" className={styles.transition}>
          <IoIosArrowRoundBack size={35} />
        </Link>
        <p className="font-semibold text-xl">Settings and activity</p>
      </div>
    </div>
  );
}
