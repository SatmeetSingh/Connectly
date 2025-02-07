import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmLogout from './ConfirmLogout';
import { useEffect, useState } from 'react';

export default function Logout() {
  const navigate = useNavigate();
  const logoutHandled = useRef(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    setIsLoggedOut(true);
  };

  useEffect(() => {
    if (isLoggedOut && !logoutHandled.current) {
      logoutHandled.current = true; // Prevents the effect from running again
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('userId');

      if (
        !localStorage.getItem('loggedIn') &&
        !localStorage.getItem('userId')
      ) {
        navigate('/');
      }
    }
  }, [isLoggedOut, navigate]);

  return (
    <div>
      <button
        className="mt-3 pl-3 text-lg font-semibold "
        onClick={handleClick}
      >
        Logout
      </button>

      {showModal && (
        <ConfirmLogout onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </div>
  );
}
