import { Link, useNavigate } from 'react-router-dom';
import Button from '../../utils/Button';
import styles from './SignUpForm.module.css';
import { useState } from 'react';
import axios from 'axios';
import { isRejected } from '@reduxjs/toolkit';

interface Data {
  username: string;
  email: string;
  password: string;
}

function SignupForm() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ field: string; message: string }[]>(
    []
  );
  const [formData, setFormData] = useState<Data>({
    username: '',
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [type]: e.target.value,
    });
  };

  const getErrors = (data: Data) => {
    const errors: { field: string; message: string }[] = [];

    if (!data.username) {
      errors.push({ field: 'username', message: 'Username required' });
    } else if (data.username.length < 5) {
      errors.push({
        field: 'username',
        message: 'Username must be at least 5 characters',
      });
    }

    if (!data.email) {
      errors.push({ field: 'email', message: 'Email required' });
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.push({ field: 'email', message: 'Invalid email' });
    }
    if (!data.password) {
      errors.push({ field: 'password', message: 'Password required' });
    } else {
      if (data.password.length < 8) {
        errors.push({
          field: 'password',
          message: 'Password must be at least 8 characters',
        });
      }
      if (!/[A-Z]/.test(data.password)) {
        errors.push({
          field: 'password',
          message: 'Password must contain an uppercase letter',
        });
      }
      if (!/[0-9]/.test(data.password)) {
        errors.push({
          field: 'password',
          message: 'Password must contain a number',
        });
      }
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = getErrors(formData);
    setErrors(errors);

    try {
      if (errors.length === 0) {
        console.log('User being Created');

        const res = await axios.post(
          `https://localhost:7272/api/users/signup`,
          formData
        );
        console.log('User Created:', res.data);
        setFormData({
          username: '',
          email: '',
          password: '',
        });
        if (res.status !== 200) {
          return alert('Something went wrong.');
        }
        navigate('/');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  const getErrorMessage = (field: string) =>
    errors.find((error) => error.field === field)?.message;

  return (
    <div className={styles.signuppage}>
      <div className="w-[90%] px-3 py-4 flex flex-col rounded-lg gap-6">
        <div className="w-[100%]">
          <p className="text-center font-bold text-3xl mb-5">Sign Up </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-10 justify-center align-middle">
            <div className="w-[100%] flex flex-col gap-12">
              <div className={styles.inputsection}>
                <input
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => onChange(e, 'username')}
                  className={styles.input}
                />
                {getErrorMessage('username') && (
                  <p className={styles.errorMessage}>
                    {getErrorMessage('username')}
                  </p>
                )}
              </div>
              <div className={styles.inputsection}>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => onChange(e, 'email')}
                  className={styles.input}
                />
                {getErrorMessage('email') && (
                  <p className={styles.errorMessage}>
                    {getErrorMessage('email')}
                  </p>
                )}
              </div>
              <div className={styles.inputsection}>
                <input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => onChange(e, 'password')}
                  className={styles.input}
                />
                {getErrorMessage('password') && (
                  <p className={styles.errorMessage}>
                    {getErrorMessage('password')}
                  </p>
                )}
              </div>
            </div>
            <Button>Sign up</Button>
            <div>
              <p className="mt-[-20px]">
                Already have an account?
                <Link to="/login" className="text-blue-700">
                  SignIn
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
