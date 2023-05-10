import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
}

const Navlink = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      className='cursor-pointer dark:hover:text-primary hover:text-primary dark:text-dark-headlines text-light-headlines'
    >
      {children}
    </Link>
  );
};

export default Navlink;
