// import Post from '../../Components/Post/Post';
import { AboveNavBar } from '../../Components/Navbar/Navbar';
import styles from './Home.module.css';
import { useParams } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
const Post = lazy(() => import('../../Components/Post/Post'));
import { getUserbyId } from '../../Api/api';
import { StorySection } from '../../Components/Profile/ProfileHeader';
import { User, userdata } from '../../Components/Profile/UserInterface';
import PostSkeleton from '../../utils/LazyLoading/PostSkeleton/PostSkeleton';

export function Home() {
  const [userData, setUserData] = useState<User>(userdata);
  const { userId } = useParams();

  const LazyLoad = () => {
    return (
      <>
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </>
    );
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getUserbyId();
      setUserData(data);
    };
    getData();
  }, []);
  return (
    <div className={styles.home}>
      <div className="min-[750px]:hidden">
        <AboveNavBar />
      </div>

      <div className=" h-[90px] w-[100vw] place-items-start  ">
        <div className=" max-w-[500px]  flex justify-start ">
          <StorySection user={userData} />
        </div>
      </div>

      <div className={styles.posts}>
        <Suspense fallback={<LazyLoad />}>
          <Post />
          <Post />
          <Post />
        </Suspense>
      </div>

      <div className={styles.suggestions}>Suggestions Page</div>
    </div>
  );
}
