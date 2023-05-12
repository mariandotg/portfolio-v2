import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import ContentLayout from '../ContentLayout';
import Icon from '../Icon';
import Navlink from '../Navbar/Navlink';

const Footer = () => {
  const data = useAppSelector((state) => state.pageConstants.constants);
  console.log(data);
  return (
    <footer className='w-full flex flex-col gap-y-16 px-4 py-8 border-t-[1px] border-primary'>
      <ContentLayout>
        <div className='grid grid-cols-3 gap-8'>
          <div className='col-span-1 row-span-2 text-title'>
            <h3 className='font-medium whitespace-nowrap font-display dark:text-dark-headlines text-light-headlines'>
              {data.text.ctaEmail.text}
            </h3>
            <a
              href={data.text.email.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex relative w-fit before:content-[""] before:h-[1px] before:w-full before:left-0 before:bottom-1 before:absolute before:bg-primary items-center font-medium gap-x-1 font-display text-primary'
            >
              {data.text.email.text}
              <MdArrowOutward />
            </a>
          </div>
          <div className='flex flex-col col-span-1 col-start-3 row-span-2 gap-y-4'>
            <Navlink href='/'>Portfolio</Navlink>
            <Navlink href='/projects'>Proyectos</Navlink>
            <Navlink href='/blog'>Blog</Navlink>
          </div>
        </div>
        {/* <ul className='grid grid-cols-2 gap-4 text-light-text dark:text-dark-text'>
          <li className='cursor-pointer hover:text-primary dark:hover:text-primary'>
            Home
          </li>
          <li className='cursor-pointer hover:text-primary dark:hover:text-primary'>
            Blogs
          </li>
          <li className='cursor-pointer hover:text-primary dark:hover:text-primary'>
            Projects
          </li>
  </ul> */}
        <ul className='flex gap-4 text-light-text dark:text-dark-text'>
          {data.social.map((social) => {
            return (
              <a
                key={social.id}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.alt}
              >
                <Icon
                  value={social.icon.toLocaleLowerCase()}
                  className='duration-[0ms] fill-light-text dark:fill-dark-text hover:fill-primary dark:hover:fill-primary'
                />
              </a>
            );
          })}
        </ul>
      </ContentLayout>
    </footer>
  );
};

export default Footer;
