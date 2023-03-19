import { useAppSelector } from '@/hooks/store/useAppSelector';
import React from 'react';
import ContentLayout from '../ContentLayout';
import Icon from '../Icon';

const Footer = () => {
  const data = useAppSelector((state) => state.pageConstants.constants);
  console.log(data);
  return (
    <footer className='w-full flex flex-col gap-y-16 px-4 py-8 border-t-[1px] border-primary'>
      <ContentLayout>
        <div>
          <h3 className='font-medium text-title font-display dark:text-dark-headlines text-light-headlines'>
            {data.text.ctaEmail.text}
          </h3>
          <a
            href={data.text.email.url}
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium underline text-title font-display text-primary'
          >
            {data.text.email.text}
          </a>
        </div>
        <ul className='grid grid-cols-2 gap-4 text-light-text dark:text-dark-text'>
          <li className='cursor-pointer hover:text-primary dark:hover:text-primary'>
            Home
          </li>
          <li className='cursor-pointer hover:text-primary dark:hover:text-primary'>
            Blogs
          </li>
          <li className='cursor-pointer hover:text-primary dark:hover:text-primary'>
            Projects
          </li>
        </ul>
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
