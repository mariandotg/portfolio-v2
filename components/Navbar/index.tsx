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
import Image from 'next/image';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { visible, scrollToTop } = useScroll();
  const isMounted = useIsMounted();

  return (
    <nav className='border-b-[1px] border-primary bg-light/80 z-[9999] dark:bg-dark/70 backdrop-saturate-200 fixed top-0 flex justify-center w-full px-4 py-3 backdrop-blur'>
      <div className='relative flex items-center w-screen tablet:max-w-[800px] justify-between gap-16'>
        <div className='items-center hidden gap-4 mobile:flex dark:text-light'>
          <Navlink href='/'>Portfolio</Navlink>
          <Navlink href='/projects'>Proyectos</Navlink>
          <Navlink href='/blog'>Blog</Navlink>
        </div>
        <Image
          src='/mlogolight.svg'
          alt='brand marianoGuillaume logo'
          className='absolute left-2/4 -translate-x-1/2 hidden tablet:dark:flex tablet:flex tablet:dark:brightness-[200] w-[164px]'
          width={164}
          height={14}
        />
        <Image
          src='/mdg_logo.svg'
          alt='brand mdg logo'
          className='absolute flex -translate-x-1/2 left-2/4 tablet:hidden'
          width={50}
          height={23}
        />
        <Button variant='secondary' className='flex mobile:hidden' icon>
          <MdMenu className='duration-[0ms] w-[18px] h-[18px]' />
        </Button>
        <div className='relative flex items-center gap-2'>
          <div className='hidden mobile:flex'>
            <LangSelector />
          </div>
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
            className='flex'
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
