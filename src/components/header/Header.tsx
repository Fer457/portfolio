/** @format */

import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import ContactButton from '../ContactButton';

const Header: React.FC = () => {
  return (
    <>
      <header className='flex flex-row p-20 justify-between items-center space-x-28 mt-12'>
        <div className='flex flex-col w-[40%] space-y-24'>
          <div className='text-[45px] font-semibold flex flex-col space-y-4'>
            <div>
              <h1>Hello, I'm Fer.</h1>
              <h2>A passionate fullstack developer.</h2>
            </div>
            <p className='text-[15px] font-normal text-[#b4b4b4]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quam odit itaque
              magnam possimus sit non cum nihil beatae eos odio ducimus aliquam natus, a
              exercitationem repellendus libero tempore sint illum atque quis alias. Asperiores ipsa
              sapiente culpa pariatur necessitatibus doloribus fugit id, velit aut maxime!
              Architecto provident modi placeat?
            </p>
          </div>
          <div className='flex flex-row w-full space-x-4'>
            <ContactButton />
            <button
              type='button'
              className='text-white focus:outline-none bg-[#739ca7]
              rounded-lg text-md px-5 py-3 text-center hover:bg-[#57757e]'
            >
              About me
            </button>
          </div>
          <SocialMediaIcons />
        </div>
        <div className='w-1/2'>
          <img
            src='https://thinkinfoservices.com/wp-content/uploads/2021/02/react-native.png'
            alt=''
            className='w-[90%] h-auto max-w-[1200px]'
          />
        </div>
      </header>
    </>
  );
};

export default Header;
