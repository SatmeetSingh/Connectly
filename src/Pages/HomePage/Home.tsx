import Post from '../../Components/Post/Post';
import Navbar from '../../Components/Navbar/Navbar';
import styles from './Home.module.css';

export function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.posts}>
        <Post />
      </div>
    </div>
  );
}
