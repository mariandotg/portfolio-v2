import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import Button from '../Button';

const About = () => {
  const data = useAppSelector((state) => state.pageContent.sections.about);

  return (
    <Section>
      <div className='flex flex-col col-span-3 gap-y-4'>
        <h1 className='flex justify-center italic font-medium text-section-title text-light-headlines dark:text-dark-headlines font-monospace'>
          {data.title}
        </h1>
        <p className='font-display text text-light-text dark:text-dark-text'>
          {data.content.description.text}
        </p>
      </div>
      <div className='flex flex-col gap-4 tablet:flex-row'>
        <Button
          variant={data.content.secondaryCta.variant}
          url={data.content.secondaryCta.url}
        >
          {data.content.secondaryCta.label}
        </Button>
        <Button variant={data.content.cta.variant} url={data.content.cta.url}>
          {data.content.cta.label}
        </Button>
      </div>
    </Section>
  );
};

export default About;
