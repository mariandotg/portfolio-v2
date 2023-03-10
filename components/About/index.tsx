import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';

const About = () => {
  const data = useAppSelector((state) => state.pageContent.sections.about);

  return (
    <Section>
      <div className='flex flex-col col-span-3 gap-y-4'>
        <h1 className='flex justify-center italic font-medium text-section-title text-light-headlines font-monospace'>
          {data.title}
        </h1>
        <p className='font-display text'>{data.content.ctaDescription.text}</p>
      </div>
      <button className='col-span-3 py-3 italic font-bold rounded mobile:col-span-1 mobile:col-end-4 bg-primary font-monospace text-light'>
        {data.content.cta.label}
      </button>
    </Section>
  );
};

export default About;
