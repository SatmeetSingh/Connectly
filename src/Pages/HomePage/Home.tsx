import Post from '../../Components/Post/Post';
import Navbar, { AboveNavBar } from '../../Components/Navbar/Navbar';
import styles from './Home.module.css';
import NavBar from '../../Components/Navbar/Navbar';
import { useParams } from 'react-router-dom';

export function Home() {
  const { userId } = useParams();
  return (
    <div className={styles.home}>
      <div className="min-[750px]:hidden">
        <AboveNavBar />
      </div>
      <div className={styles.posts}>
        <Post />
      </div>
      <div className={styles.suggestions}>Suggestions Page</div>
    </div>
  );
}
