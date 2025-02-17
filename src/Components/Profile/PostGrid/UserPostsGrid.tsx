import React, { useEffect } from 'react';
import PostGrid from './PostGrid';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchPostsByUserId } from '../../../Pages/HomePage/HomeSlice';

export default function UserPostsGrid() {
  const dispatch = useDispatch<AppDispatch>();
  const userId = window.localStorage.getItem('userId');
  const { postData, status, error } = useSelector(
    (state: RootState) => state.home
  );

  useEffect(() => {
    dispatch(fetchPostsByUserId({ url: '/Posts/user', userId: `${userId}` }));
  }, [dispatch, userId]);

  return (
    <div className=" py-[2px] border-black">
      <PostGrid post={postData} status={status} error={error} />
    </div>
  );
}
