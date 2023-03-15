import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import Emoji from '../Emoji';

const JobExperience = () => {
  const data = useAppSelector(
    (state) => state.pageContent.sections.jobExperience
  );

  return (
    <Section>
      <h2 className='flex italic font-medium gap-x-4 text-section-title font-monospace text-light-headlines'>
        <Emoji emoji={data.emoji} />
        {data.title}
      </h2>
      <div className='flex flex-col gap-y-8 border-l-[1px] border-primary'>
        {data.content.jobCards.map((jobCard) => {
          return (
            <div
              key={jobCard.id}
              className='relative flex flex-col pl-4 gap-y-4'
            >
              <div className='before:content-[""] before:rounded before:w-[7px] before:h-[7px] before:bg-primary before:absolute before:top-1 before:right-auto before:-left-1'>
                <span className='text-light-text'>{jobCard.period}</span>
                <h4 className='font-medium text-light-headlines'>
                  {jobCard.company}
                </h4>
              </div>
              <div className='flex flex-col gap-y-3'>
                <h3 className='font-medium text-title font-display text-light-headlines'>
                  {jobCard.position}
                </h3>
                <p className='text-light-text'>{jobCard.responsabilities}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default JobExperience;
