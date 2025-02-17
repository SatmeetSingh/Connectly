import React from 'react';
import NavBar from '../../Components/Navbar/Navbar';
import { Navigate, Outlet } from 'react-router-dom';

export default function AppLayout() {
  const isLoggedIn = window.localStorage.getItem('loggedIn')?.toString();

  return (
    <div className="flex flex-row h-[100vh] overflow-hidden ">
      {/* Sidebar for larger screens, collapsible on small screens */}
      <div className="md:flex-1 p-0 ">
        <NavBar />
      </div>

      {/* Main Content Area */}
      <div className="md:flex-4 w-[100%]">
        {isLoggedIn === 'true' ? <Outlet /> : <Navigate to="/" />}
      </div>
    </div>
  );
}
