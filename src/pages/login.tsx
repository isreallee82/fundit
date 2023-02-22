import { useState } from 'react'
// import Cookies from 'js-cookie'

export interface Data {
  access_token: string
  token_type: string
  expires_in: number
  user: User
}

export interface User {
  id: number
  name: string
  email: string
  email_verified_at: null
  created_at: Date
  updated_at: Date
}

function Login() {
  const [userData, setUserData] = useState<{ email: string; password: string }>(
    { email: '', password: '' }
  )
  const [isLogin, setIsLogin] = useState(true)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // function handleToggle() {
  //   setIsLogin((prevState) => !prevState)
  // }

  // hook useEffect
  // useEffect(() => {
  //   //check token
  //   if (Cookies.get('token')) {
  //     //redirect page dashboard

  //   }
  // }, [])

  return (
    <>
      <section className='contaniner mx:auto bg-gray-50 bg-gray-900'>
        <div className='flex flex-col bg-gray-900 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
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
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sSm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  ></input>
                </div>

                <button
                  type='submit'
                  className='w-full text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Log in
                </button>
                {!isLogin ? (
                  <p>
                    Don&apos;t have an account? <a href='/register'>Sign Up</a>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      type='submit'
                    >
                      Login
                    </button>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Login
