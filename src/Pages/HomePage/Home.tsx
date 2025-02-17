// import Post from '../../Components/Post/Post';
import { AboveNavBar } from '../../Components/Navbar/Navbar';
import styles from './Home.module.css';
import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { StorySection } from '../../Components/Profile/ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchData } from './HomeSlice';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { userData } = useSelector((state: RootState) => state.home);
  const { userId } = useParams();

  // const LazyLoad = () => {
  //   return (
  //     <>
  //       <PostSkeleton />
  //       <PostSkeleton />
  //       <PostSkeleton />
  //     </>
  //   );
  // };

  useEffect(() => {
    dispatch(fetchData({ url: '/users', userId: `${userId}` }));
  }, [dispatch, userId]);

  return (
    <div className={styles.home}>
      <div className="min-[750px]:hidden">
        <AboveNavBar />
      </div>

      <div>
        <div className={styles.story}>
          <StorySection user={userData} />
        </div>
      </div>

      <div className={styles.posts}>
        {/* <Suspense fallback={<LazyLoad />}>
          <Post />
          <Post />
          <Post />
        </Suspense> */}
      </div>
    </div>
  );
}
