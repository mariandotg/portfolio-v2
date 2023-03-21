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
      <div className='flex flex-col gap-y-8 tablet:col-span-3 tablet:gap-0 border-l-[1px] border-primary tablet:border-none'>
        {data.content.jobCards.map((jobCard) => {
          return (
            <div
              key={jobCard.id}
              className='relative flex flex-col pl-4 gap-y-2 tablet:grid tablet:grid-cols-3 tablet:pl-0 tablet:gap-8'
            >
              <div className='tablet:col-span-1 tablet:pb-8 tablet:relative tablet:after:-right-[16px] tablet:after:content-[""] tablet:after:h-full tablet:after:w-[1px] tablet:after:absolute tablet:after:bg-primary'>
                <span className='font-light text-light-text dark:text-dark-text'>
                  {jobCard.period}
                </span>
              </div>
              <div className='flex tablet:pb-8 tablet:border-none flex-col gap-y-2 tablet:col-span-2 before:content-[""] before:rounded before:w-[7px] before:h-[7px] before:bg-primary before:absolute before:top-1 before:right-auto tablet:relative tablet:before:-left-5 before:-left-1'>
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
