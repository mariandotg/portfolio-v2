import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import Button from '../Button';

const About = () => {
  const data = useAppSelector((state) => state.pageContent.sections.about);
  const constants = useAppSelector((state) => state.pageConstants.constants);

  return (
    <Section>
      <div className='flex flex-col col-span-3 gap-y-4'>
        <h1 className='flex justify-center italic font-medium text-section-title text-light-headlines dark:text-dark-headlines font-monospace'>
          {data.title}
        </h1>
        <p className='font-display text text-light-text dark:text-dark-text'>
          {data.content.ctaDescription.text}
        </p>
      </div>
      <Button variant='primary' url={constants.text.email.url}>
        {data.content.cta.label}
      </Button>
    </Section>
  );
};

export default About;
