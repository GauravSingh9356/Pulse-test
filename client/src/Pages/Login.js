import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import cookie from 'js-cookie';
import { Link } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
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
    console.log(user);

    try {
      const { data } = await axios.post(
        'http://localhost:9000/api/users/login',
        {
          Headers: {
            Authorisation: cookie.get('token'),
          },
        },
        user
      );

      console.log(data);
      cookie.set('token', data.token);

      toast.success('Login Successful!');
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
                      <h4 className='text-center mb-4'>Sign in your account</h4>
                      <form>
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
                            placeholder='hello@example.com'
                            name='password'
                            value={user.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className='form-row d-flex justify-content-between mt-4 mb-2'>
                          <div className='form-group'>
                            <div className='custom-control custom-checkbox ml-1'>
                              <input
                                type='checkbox'
                                className='custom-control-input'
                                id='basic_checkbox_1'
                              />
                              <label
                                className='custom-control-label'
                                for='basic_checkbox_1'
                              >
                                Remember my preference
                              </label>
                            </div>
                          </div>
                          <div className='form-group'>
                            <a href='page-forgot-password.html'>
                              Forgot Password?
                            </a>
                          </div>
                        </div>
                        <div className='text-center'>
                          <button
                            type='submit'
                            className='btn btn-primary btn-block'
                            onClick={handleSubmit}
                          >
                            Sign Me In
                          </button>
                        </div>
                      </form>
                      <div className='new-account mt-3'>
                        <p>
                          Don't have an account?{' '}
                          <Link className='text-primary' to='/register'>
                            Sign up
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

export default Login;
