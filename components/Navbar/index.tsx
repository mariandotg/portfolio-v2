import React from 'react';
import Button from '../Button';
import { SiLinkedin } from 'react-icons/si';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import useTheme from '@/hooks/useTheme';
import { useAppSelector } from '@/hooks/store/useAppSelector';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const constants = useAppSelector((state) => state.pageConstants.constants);

  return (
    <nav className='border-b-[1px] border-primary bg-light/80 z-[9999] dark:bg-dark/70 backdrop-saturate-200 fixed top-0 flex justify-center w-full px-4 py-3 backdrop-blur'>
      <div className='flex w-screen tablet:max-w-[800px] justify-between gap-16'>
        <Button
          variant='secondary'
          url={constants.social.find((pre) => pre.alt === 'Linkedin')?.url}
          icon
        >
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
