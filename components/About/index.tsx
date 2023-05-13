import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import Button from '../Button';
import Icon from '../Icon';

const About = () => {
  const data = useAppSelector((state) => state.pageContent.sections.about);
  const socialMedia = useAppSelector(
    (state) => state.pageConstants.constants.social
  );

  return (
    <Section>
      <div className='flex flex-col col-span-3 gap-y-4'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='flex italic font-medium text-section-title text-light-headlines dark:text-dark-headlines font-monospace'>
            {data.title}
          </h1>
          <div className='flex gap-x-4'>
            {socialMedia.map((social) => {
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
          </div>
        </div>
        <p className='font-display text text-light-text dark:text-dark-text'>
          {data.content.description.text}
        </p>
      </div>
      <div className='flex flex-col gap-4 tablet:col-start-2 tablet:gap-8 tablet:col-span-2 tablet:grid tablet:grid-cols-2'>
        <Button
          variant={data.content.secondaryCta.variant}
          url={data.content.secondaryCta.url}
          className='tablet:col-span-1'
        >
          {data.content.secondaryCta.label}
        </Button>
        <Button
          variant={data.content.cta.variant}
          url={data.content.cta.url}
          className='tablet:col-span-1'
        >
          {data.content.cta.label}
        </Button>
      </div>
    </Section>
  );
};

export default About;
