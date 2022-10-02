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
    </>
  );
};

export default App;
