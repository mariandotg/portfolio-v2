import { useAppSelector } from '@/hooks/store/useAppSelector';
import React from 'react';
import ContentLayout from '../ContentLayout';
import Icon from '../Icon';

const Footer = () => {
  const data = useAppSelector((state) => state.pageConstants.constants);
  console.log(data);
  return (
    <footer className='w-full flex flex-col gap-y-16 px-4 py-8 border-t-[1px] border-light-text'>
      <ContentLayout>
        <div>
          <h3 className='font-medium text-title font-display text-light-headlines'>
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
        <ul className='grid grid-cols-2 gap-4'>
          <li>Home</li>
          <li>Blog</li>
          <li>Projects</li>
        </ul>
        <ul className='flex gap-4'>
          {data.social.map((social) => {
            return (
              <a
                key={social.id}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.alt}
              >
                <Icon value={social.icon} />
              </a>
            );
          })}
        </ul>
      </ContentLayout>
    </footer>
  );
};

export default Footer;
