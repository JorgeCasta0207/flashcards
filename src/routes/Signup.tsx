import { Link } from 'react-router-dom'

import flashcardbg from '../assets/flashcard-bg.jpg'
import loginbg from '../assets/login-bg.png'
import logo from '../assets/logo.png'

function Signup() {
  return (
    <div
    className='bg-cover'
    style={{ backgroundImage: `url(${loginbg})`, height: '100vh' }}
  >
    <div className='p-3 w-max'>
      <Link to='/'>
        <img src={logo} className='h-14 w-auto rounded-xl' />
      </Link>
    </div>
    <div className='drop-shadow-[0px_4px_4px_rgba(0,0,0,0.45)] flex top-40 left-0 pl-40 bg-primary rounded-r-xl mr-[50px]'>
      <p
        id='title-text'
        className='text-secondary font-bold text-[36px] [text-shadow:_0_3px_0_rgb(7_0_0_/_40%)]'
      >
        Signup
      </p>
    </div>
    {/*login form*/}
    <div className='flex justify-center'>
      <div
        className='drop-shadow-[0px_4px_4px_rgba(0,0,0,0.45)] absolute bg-accent w-[275px] h-[185px] rounded-2xl m-[160px]'
      >
        <p className='mt-[155px] ml-[10px]'>Already Registered?{' '}
        <Link
          to='/Login'
          className='text-slate-200 underline underline-offset-2'
        >
          Login
        </Link>
      </p>
      </div>
    </div>
    {/* signup card */}
    <div className='z-10 pb-[10px] px-[20px] pt-[20px] text-center relative m-auto w-[275px] bg-cover drop-shadow-[0px_4px_4px_rgba(0,0,0,0.65)] rounded-2xl top-[61px] left-[30px]'
    style={{ backgroundImage: `url(${flashcardbg}) ` }}
    >
      {/*form stuff*/}
      <div className='flex'>
          <span className='inline-flex items-center px-3 text-blue-600 bg-blue-700 border border-r-0 border-gray-300 rounded-l-md'>
            <svg
              className='w-4 h-4 text-secondary'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
            </svg>
          </span>
          {/*username v*/}
          <input
            type='text'
            className='shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-none rounded-r-lg bg-primary border border-gray-300 text-sky-800 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-sky-800'
            placeholder='username'
          ></input>
        </div>
        <div className='flex'>
          <span className='inline-flex items-center px-3 bg-blue-700 border border-r-0 border-gray-300 rounded-l-md'>
            <svg
              className='w-4 h-4 text-secondary'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
            </svg>
          </span>
          {/*email v*/}
          <input
            type='text'
            className='shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-none rounded-r-lg bg-primary border border-gray-300 text-sky-800 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-sky-800'
            placeholder='email'
          ></input>
        </div>
        <div className='flex pt-[10px]'>
          <span className='inline-flex items-center px-[10px] text-sky-800 bg-blue-700 border border-r-0 border-gray-300 rounded-l-md'>
            <svg
              className='w-5 h-5 text-secondary'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.38 14.5C17.38 16.7 16.7 17.38 14.5 17.38H9.5C7.3 17.38 6.62 16.7 6.62 14.5V13.5C6.62 11.79 7.03 11 8.25 10.73V10C8.25 9.07 8.25 6.25 12 6.25C15.75 6.25 15.75 9.07 15.75 10V10.73C16.97 11 17.38 11.79 17.38 13.5V14.5Z' />
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M11.9984 15.0984C12.606 15.0984 13.0984 14.606 13.0984 13.9984C13.0984 13.3909 12.606 12.8984 11.9984 12.8984C11.3909 12.8984 10.8984 13.3909 10.8984 13.9984C10.8984 14.606 11.3909 15.0984 11.9984 15.0984Z'
              />
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M12 7.75C10.11 7.75 9.75 8.54 9.75 10V10.62H14.25V10C14.25 8.54 13.89 7.75 12 7.75Z'
              />
            </svg>
          </span>
          {/*password v*/}
          <input
            type='password'
            className='shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-none rounded-r-lg bg-primary border border-gray-300 text-sky-800 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-sky-800'
            placeholder='password'
          ></input>
        </div>
         {/*password 2 v*/}
         <div className='flex'>
          <span className='inline-flex items-center px-[10px] text-sky-800 bg-blue-700 border border-r-0 border-gray-300 rounded-l-md'>
            <svg
              className='w-5 h-5 text-secondary'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.38 14.5C17.38 16.7 16.7 17.38 14.5 17.38H9.5C7.3 17.38 6.62 16.7 6.62 14.5V13.5C6.62 11.79 7.03 11 8.25 10.73V10C8.25 9.07 8.25 6.25 12 6.25C15.75 6.25 15.75 9.07 15.75 10V10.73C16.97 11 17.38 11.79 17.38 13.5V14.5Z' />
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M11.9984 15.0984C12.606 15.0984 13.0984 14.606 13.0984 13.9984C13.0984 13.3909 12.606 12.8984 11.9984 12.8984C11.3909 12.8984 10.8984 13.3909 10.8984 13.9984C10.8984 14.606 11.3909 15.0984 11.9984 15.0984Z'
              />
              <path
                xmlns='http://www.w3.org/2000/svg'
                d='M12 7.75C10.11 7.75 9.75 8.54 9.75 10V10.62H14.25V10C14.25 8.54 13.89 7.75 12 7.75Z'
              />
            </svg>
          </span>
          <input
            type='password'
            className='shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-none rounded-r-lg bg-primary border border-gray-300 text-blue-600 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-sky-800'
            placeholder='confirm password'
          ></input>
        </div>

        <div className='text-center'>
          <button
            type='button'
            className='mt-[10px] text-white text-[20px] bg-accent hover:bg-violet-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-[40px] mb-1 text-[15px] focus:outline-none'
          >
            Register
          </button>
        </div>
    </div>

  </div>
  )
}

export default Signup