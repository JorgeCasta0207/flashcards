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
    <div className='drop-shadow-[0px_4px_4px_rgba(0,0,0,0.45)] flex top-40 right-0 pr-40 bg-accent rounded-l-xl ml-[50px]'>
      <p
        id='title-text'
        className='text-secondary font-bold text-[36px] [text-shadow:_0_3px_0_rgb(7_0_0_/_40%)] ml-[20%]'
      >
        Welcome
      </p>
    </div>
    {/*login form*/}
    <div className='flex justify-center'>
      <div
        className='drop-shadow-[0px_4px_4px_rgba(0,0,0,0.45)] absolute bg-cover bg-no-repeat bg-white px-[25px] pt-[25px] pb-[10px] rounded-2xl m-8 max-w-fit'
        style={{ backgroundImage: `url(${flashcardbg}) ` }}
      >
        
      </div>
    </div>
    {/* signup card */}
    <div className='z-10 text-center relative m-auto w-[275px] bg-accent drop-shadow-[0px_4px_4px_rgba(0,0,0,0.65)] rounded-2xl top-[61px] left-[30px]'>
      {/*form stuff*/}
      <div className='flex'>
          <span className='inline-flex items-center px-3 text-[#584289] bg-[#584289] border border-r-0 border-gray-300 rounded-l-md'>
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
            className='shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-none rounded-r-lg bg-accent border border-gray-300 text-[#584289] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-[#584289]'
            placeholder='username'
          ></input>
        </div>
        <div className='flex'>
          <span className='inline-flex items-center px-3 text-[#584289] bg-[#584289] border border-r-0 border-gray-300 rounded-l-md'>
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
          {/*email v*/}
          <input
            type='text'
            className='shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-none rounded-r-lg bg-accent border border-gray-300 text-[#584289] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-[#584289]'
            placeholder='email'
          ></input>
        </div>
        <div className='flex pt-[10px]'>
          <span className='inline-flex items-center px-[10px] text-[#584289] bg-[#584289] border border-r-0 border-gray-300 rounded-l-md'>
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
            className='shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-none rounded-r-lg bg-accent border border-gray-300 text-[#584289] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-[#584289]'
            placeholder='password'
          ></input>
        </div>
         {/*password 2 v*/}
         <div className='flex'>
          <span className='inline-flex items-center px-[10px] text-[#584289] bg-[#584289] border border-r-0 border-gray-300 rounded-l-md'>
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
            className='shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] rounded-none rounded-r-lg bg-accent border border-gray-300 text-[#584289] focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 placeholder:text-[#584289]'
            placeholder='confirm password'
          ></input>
        </div>

        <div className='text-center'>
          <button
            type='button'
            className=' text-white bg-primary hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-[40px] mb-1 text-[15px] focus:outline-none'
          >
            Register
          </button>
        </div>
      <p className='absolute top-[200px] ml-[10px] '>
        Already Registered?{' '}
        <Link
          to='/Login'
          className='text-slate-200 underline underline-offset-2'
        >
          Login
        </Link>
      </p>
    </div>

  </div>
  )
}

export default Signup