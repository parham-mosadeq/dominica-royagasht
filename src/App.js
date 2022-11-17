import React from 'react';
// *components
import Inputs from './components/Inputs';
// *context
import { FormController } from './context/FormController';

const App = () => {
  return (
    <>
      <div className='block  p-3 leading-7 m-auto  text-center w-full bg-black bg-clr-purple-main text-white '>
        <h1>رویاگشت</h1>
        <p> فرم زیر را کامل پر کنید</p>
      </div>
      <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center justify-center'>
        <FormController>
          <Inputs />
        </FormController>
      </div>

      <footer className='bg-blue-700 text-white p-1'>
        <div>
          <p className='text-clr-blue-main '>
            به وبسایت های مجموع رویاگشت سر بزنید:
          </p>
        </div>
        <ul className='flex items-align justify-around'>
          <li className='p-1 mt-1 mb-1 tracking-widest'>
            <a
              className='cursor-pointer hover:text-clr-yellow-main '
              target='_blank'
              rel='noreferrer'
              href='https://www.visagard.com/'
            >
              ویزاگرد
            </a>
          </li>
          <li className='p-1 mt-1 mb-1 tracking-widest'>
            <a
              className='cursor-pointer hover:text-clr-purple-main'
              target='_blank'
              rel='noreferrer'
              href='https://www.royagasht.com/'
            >
              رویاگشت
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default App;
