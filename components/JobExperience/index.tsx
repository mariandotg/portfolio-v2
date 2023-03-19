import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import SectionTitle from '../Section/SectionTitle';

const JobExperience = () => {
  const data = useAppSelector(
    (state) => state.pageContent.sections.jobExperience
  );

  return (
    <Section>
      <SectionTitle>{data.title}</SectionTitle>
      <div className='flex flex-col gap-y-8 border-l-[1px] border-primary'>
        {data.content.jobCards.map((jobCard) => {
          return (
            <div
              key={jobCard.id}
              className='relative flex flex-col pl-4 gap-y-2'
            >
              <div className='before:content-[""] before:rounded before:w-[7px] before:h-[7px] before:bg-primary before:absolute before:top-1 before:right-auto before:-left-1'>
                <span className='font-light text-light-text dark:text-dark-text'>
                  {jobCard.period}
                </span>
              </div>
              <div className='flex flex-col gap-y-2'>
                <h3 className='flex font-medium gap-x-4 dark:text-dark-headlines text-title font-display text-light-headlines'>
                  {jobCard.position}
                  <span className='font-light text-light-text dark:text-dark-text'>
                    {jobCard.company}
                  </span>
                </h3>
                <p className='text-light-text dark:text-dark-text'>
                  {jobCard.responsabilities}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default JobExperience;
