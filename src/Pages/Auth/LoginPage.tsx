import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom';
import LoginForm from '../../Components/login/LoginForm';
import Button from '../../utils/Button';
interface LoginPageProp {}

const LoginPage: React.FC<LoginPageProp> = () => {
  return (
    <div className="overflow-hidden">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
