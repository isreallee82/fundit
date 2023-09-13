import React from "react";
import { useState } from "react";
import axios from "axios";
import { FormEvent, ChangeEvent, useEffect } from 'react'
import { redirect } from 'react-router-dom'
// import Cookies from 'js-cookie'
// import { useHistory } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

    export interface Data {
      access_token: string
      token_type: string
      expires_in: number
      user: User
    }
    
    export interface User {
      email: string
      password: string
    }
    
    function Register() {
      const [userData, setUserData] = useState<User>({ email: " ", password: " " });
      const [login, setRegister] = useState<boolean>(false);
    
      useEffect(() => {
        if (login) {
          // Redirect to the dashboard or perform any necessary action
          redirect('/dashboard');
          // You can use React Router for client-side routing
        }
      }, [login]);
    
      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

          // set configurations
          const configuration = {
            method: "post",
            url: "https://funding-d91e83bfa894.herokuapp.com/register",
            data: {userData},
          };

    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          await axios(configuration)
          .then((result) => {setRegister(true);
          }).catch((error) => {error = new Error();});
          // Assuming a successful response means login is successful
          setRegister(true);
        } catch (error) {
          // Handle error appropriately, e.g., display an error message
          console.error('Login failed:', error);
        }
      };
    
      return (
        <>
          <section className='contaniner mx:auto bg-gray-50 bg-gray-900 text-white'>
            <div className='flex flex-col bg-gray-900 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
              <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
                <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                  <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                    Register
                  </h1>
    
                  <form
                    onSubmit={handleSubmit}
                    className='space-y-4 md:space-y-6'
                    action='POST'
                  >
                    <div>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Your email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        value={userData.email}
                        onChange={handleChange}
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='name@company.com'
                      ></input>
                    </div>
                    <div>
                      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Password
                      </label>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        value={userData.password}
                        onChange={handleChange}
                        placeholder='password'
                        className='bg-gray-50 border border-gray-300 text-gray-900 sSm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      ></input>
                    </div>
    
                    <button
                      type='submit'
                      className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                    >
                      Sign up
                    </button>
                      <p>
                        Already have an account?{' '}
                        <a href='/login' className=' text-blue-600 hover:underline'>
                          Login
                        </a>
                      </p>
                   
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )
    }
    export default Register
    