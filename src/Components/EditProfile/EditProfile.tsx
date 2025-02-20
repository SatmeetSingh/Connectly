import React, { useEffect, useState } from 'react';
import styles from './EditProfile.module.css';
import { RxCross2 } from 'react-icons/rx';
import { GoCheck } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import UploadPhoto from './UploadPhoto';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchData } from '../../Pages/HomePage/HomeSlice';
import { setUpdateData, UpdateData } from '../../Pages/AppLayout/layoutSlice';

export default function EditProfile() {
  const dispatch = useDispatch<AppDispatch>();
  const { updateData } = useSelector((state: RootState) => state.app);
  const [fileImage, setFileImage] = useState<File | null>(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    dispatch(fetchData({ url: '/users', userId: `${userId}` }));
  }, [dispatch, userId]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    dispatch(setUpdateData({ [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileImage(e.target.files[0]); // Store file in local state instead of Redux
    }
  };

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      Object.entries(updateData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });
      if (fileImage) formData.append('file', fileImage);

      const response = await dispatch(
        UpdateData({
          url: '/users/update',
          userId: `${userId}`,
          data: formData,
        })
      ).unwrap();
      console.log(response.user);
      navigate(`/${userId}/profile`); // Redirect after success
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <div className={styles.EditProfile}>
      <form className="w-[95%] flex flex-col gap-5 " onSubmit={handleClick}>
        <div>
          <div className={styles.top}>
            <Link to="#" onClick={() => window.history.back()}>
              <RxCross2 size={30} />
            </Link>
            <p>Edit Profile</p>
            <button type="submit">
              <GoCheck size={30} color="blue" />
            </button>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img
            src="/defaultImage.svg"
            alt="profile"
            className={styles.profilePicture}
          />
          <div className="text-base font-semibold text-blue-600 mr-4">
            <UploadPhoto handleFileChange={handleFileChange} />
          </div>
        </div>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Name"
          value={updateData.name || ''}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          className={styles.input}
          placeholder="Username"
          value={updateData.username || ''}
          onChange={handleChange}
        />
        <textarea
          name="bio"
          className={styles.input}
          placeholder="Bio"
          value={updateData.bio || ''}
          onChange={handleChange}
        />
        <select
          name="gender"
          value={updateData.gender || ''}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </form>
      <div className="mt-3">
        <Link to="" className="text-blue-600">
          Add Link
        </Link>
      </div>
    </div>
  );
}
