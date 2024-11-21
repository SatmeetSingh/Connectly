import { Link } from 'react-router-dom';
import LoginForm from '../../Components/login/LoginForm';
import Button from '../../utils/Button';

function LoginPage() {
  return (
    <div className="overflow-hidden">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
