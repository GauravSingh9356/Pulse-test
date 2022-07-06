import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:9000/api/users/register',
        user
      );
      toast.success('Registration Successful!');
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className='authincation h-100'>
        <div className='container h-100'>
          <div className='row justify-content-center h-100 align-items-center'>
            <div className='col-md-6'>
              <div className='authincation-content'>
                <div className='row no-gutters'>
                  <div className='col-xl-12'>
                    <div className='auth-form'>
                      <div className='text-center mb-3'>
                        <a href='index.html'>
                          <img src='images/logo-full.png' alt='' />
                        </a>
                      </div>
                      <h4 className='text-center mb-4'>Sign up your account</h4>
                      <form>
                        <div className='form-group'>
                          <label className='mb-1'>
                            <strong>Username</strong>
                          </label>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='username'
                            name='username'
                            value={user.username}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='form-group'>
                          <label className='mb-1'>
                            <strong>Email</strong>
                          </label>
                          <input
                            type='email'
                            className='form-control'
                            placeholder='hello@example.com'
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='form-group'>
                          <label className='mb-1'>
                            <strong>Password</strong>
                          </label>
                          <input
                            type='password'
                            className='form-control'
                            name='password'
                            value={user.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='text-center mt-4'>
                          <button
                            type='submit'
                            className='btn btn-primary btn-block'
                            onClick={handleSubmit}
                          >
                            Sign me up
                          </button>
                        </div>
                      </form>
                      <div className='new-account mt-3'>
                        <p>
                          Already have an account?{' '}
                          <Link className='text-primary' to='/login'>
                            Sign in
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
