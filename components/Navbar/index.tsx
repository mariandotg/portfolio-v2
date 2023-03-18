import React from 'react';
import Button from '../Button';
import { SiLinkedin } from 'react-icons/si';
import { MdLightMode, MdDarkMode, MdMenu } from 'react-icons/md';
import useTheme from '@/hooks/useTheme';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className='fixed top-0 flex justify-between w-full px-4 py-3'>
      <Button variant='secondary' icon>
        <MdMenu className='duration-[0ms] w-[18px] h-[18px] fill-primary' />
      </Button>
      <div className='flex gap-x-2'>
        <Button variant='secondary' icon>
          <SiLinkedin className='duration-[0ms] w-[18px] h-[18px] fill-primary' />
        </Button>
        <Button variant='secondary' onClick={toggleTheme} icon>
          {theme === 'dark' ? (
            <MdLightMode className='duration-[0ms] w-[18px] h-[18px] fill-primary' />
          ) : (
            <MdDarkMode className='duration-[0ms] w-[18px] h-[18px] fill-primary' />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
