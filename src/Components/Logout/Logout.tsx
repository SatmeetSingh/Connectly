import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = () => {
    window.localStorage.removeItem('loggedIn');
    window.localStorage.removeItem('userId');
    navigate('/');
  };
  return (
    <div>
      <button
        className="mt-3 pl-3 text-lg font-semibold "
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}
