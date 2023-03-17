import React from 'react';
import Icon from '../Icon';
import BrandLogo from '@/public/mdg_logo.svg';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-4 py-3'>
      <BrandLogo className='w-[32px]' />
      <div className='flex gap-x-2'>
        <Icon value='github' />
        <Icon value='linkedin' />
        <Icon value='github' />
      </div>
    </nav>
  );
};

export default Navbar;
