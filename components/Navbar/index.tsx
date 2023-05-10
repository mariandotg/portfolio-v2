import React from 'react';
import {
  MdLightMode,
  MdDarkMode,
  MdMenu,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

import useTheme from '@/hooks/useTheme';
import useScroll from '@/hooks/useScroll';
import useIsMounted from '@/hooks/useIsMounted';

import Button from '../Button';
import LangSelector from '../LangSelector';
import Navlink from './Navlink';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { visible, scrollToTop } = useScroll();
  const isMounted = useIsMounted();

  return (
    <nav className='border-b-[1px] border-primary bg-light/80 z-[9999] dark:bg-dark/70 backdrop-saturate-200 fixed top-0 flex justify-center w-full px-4 py-3 backdrop-blur'>
      <div className='flex items-center w-screen tablet:max-w-[800px] justify-between gap-16'>
        <div className='items-center hidden gap-4 italic font-medium tablet:flex text font-monospace dark:text-light'>
          <Navlink href='/'>Portfolio</Navlink>
          <Navlink href='/projects'>Proyectos</Navlink>
          <Navlink href='/blog'>Blog</Navlink>
        </div>
        <Button variant='secondary' className='flex tablet:hidden' icon>
          <MdMenu className='duration-[0ms] w-[18px] h-[18px]' />
        </Button>
        <img
          src='./mlogolight.svg'
          className='hidden tablet:dark:flex tablet:flex tablet:dark:brightness-[200] w-[164px]'
        />
        <img src='./mdg_logo.svg' className='flex tablet:hidden w-[50px]' />
        <div className='flex items-center gap-2'>
          <LangSelector />
          <Button
            variant='secondary'
            onClick={toggleTheme}
            icon
            disabled={!isMounted}
          >
            {isMounted ? (
              theme === 'dark' ? (
                <MdLightMode className='duration-[0ms] w-[18px] h-[18px]' />
              ) : (
                <MdDarkMode className='duration-[0ms] w-[18px] h-[18px]' />
              )
            ) : (
              <FaSpinner className='duration-[0ms] w-[18px] h-[18px]' />
            )}
          </Button>
          <Button
            variant='secondary'
            onClick={scrollToTop}
            icon
            disabled={!visible}
          >
            <MdKeyboardArrowUp className='duration-[0ms] w-[18px] h-[18px] ' />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
