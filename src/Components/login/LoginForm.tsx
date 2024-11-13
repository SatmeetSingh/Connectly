import { Link } from 'react-router-dom';
import Button from '../../utils/Button';
import styles from './loginForm.module.css';

function LoginForm() {
  return (
    <div className={styles.loginpage}>
      <div className="w-[90%] px-3 py-4 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="items-center font-semibold text-4xl mt-5">
            Login to your account
          </p>
          <p className="text-lg">Please enter your details</p>
        </div>

        <form>
          <div className="flex flex-col gap-6 justify-center align-middle">
            <div className="w-[100%] flex flex-col gap-12">
              <div className={styles.inputsection}>
                <input
                  type="text"
                  placeholder="Enter email"
                  className={styles.input}
                />
              </div>
              <div className={styles.inputsection}>
                <input
                  type="password"
                  placeholder="Enter password"
                  className={styles.input}
                />
              </div>
            </div>
            <div className="relative">
              <p className="absolute right-0 bottom-[-10px]">
                Forgot Password?
              </p>
            </div>
            <Button>Login</Button>
            <div className="mt-[-10px] ">
              <p>
                Don't have an account?
                <Link to="/signup" className="text-blue-700">
                  {' '}
                  Sign-up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
