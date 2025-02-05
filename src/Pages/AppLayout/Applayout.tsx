import NavBar from '../../Components/Navbar/Navbar';
import { Navigate, Outlet } from 'react-router-dom';

export default function () {
  const isLoggedIn = window.localStorage.getItem('loggedIn')?.toString();

  return (
    <div className="h-[100%] min-[750px]:flex min-[750px]:gap-3">
      <NavBar />
      {isLoggedIn === 'true' ? <Outlet /> : <Navigate to="/" />}
    </div>
  );
}
