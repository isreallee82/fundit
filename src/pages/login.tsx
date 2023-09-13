import { useState } from 'react'
import { FormEvent, ChangeEvent, useEffect } from 'react'
import axios from 'axios'
import { redirect } from 'react-router-dom'
import Cookies from "universal-cookie";
const cookies = new Cookies();
// import Cookies from 'js-cookie'

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

function Login() {
  const [userData, setUserData] = useState<User>({ email: "", password: "" });
  const [login, setLogin] = useState<boolean>(false);

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
    url: `https://funding-d91e83bfa894.herokuapp.com/login`,
    data: {
      email: userData.email,
      password: userData.password,
    },
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios(configuration)
      .then((result) => {setLogin(true)
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/auth";
      }).catch((error) => {error = new Error();})
      // Assuming a successful response means login is successful
      setLogin(true);
    } catch (error) {
      // Handle error appropriately, e.g., display an error message
      console.error('Login failed:', error);
      setLogin(false);
    }
  };

  return (
    <>
       <section className='contaniner mx:auto bg-gradient-to-r from-stone-800 to-gray-900 text-white'>
            <div className='flex flex-col bg-gradient-to-r from-stone-800 to-gray-900 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
              <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gradient-to-r from-stone-800 to-gray-900 dark:border-stone-400'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Sign in
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
                  Log in
                </button>
               
                  <p>
                    Don&apos;t have an account? <a className=' text-blue-600 hover:underline' href='/register'>Sign Up</a>
                  </p>
               
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Login
