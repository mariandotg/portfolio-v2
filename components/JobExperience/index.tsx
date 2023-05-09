import React, { useState } from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import SectionTitle from '../Section/SectionTitle';
import { JobCard } from '@/models/domain/JobCards';

const JobExperience = () => {
  const data = useAppSelector(
    (state) => state.pageContent.sections.jobExperience
  );

  const [displayedJob, setDisplayedJob] = useState<JobCard>(
    data.content.jobCards[0]
  );

  return (
    <Section>
      <SectionTitle>{data.title}</SectionTitle>
      <div className='flex flex-col gap-y-8 relative tablet:col-span-1 tablet:gap-0 border-l-[1px] border-primary tablet:border-none tablet:after:top-0 tablet:after:-right-[16px] tablet:after:content-[""] tablet:after:h-full tablet:after:w-[1px] tablet:after:absolute tablet:after:bg-primary '>
        {data.content.jobCards.map((jobCard) => {
          return (
            <div
              key={jobCard.id}
              id='this'
              className='relative flex flex-col pl-4 gap-y-2 tablet:grid tablet:grid-cols-1 tablet:pl-0 tablet:gap-8'
            >
              <div
                onClick={() => setDisplayedJob(jobCard)}
                className='tablet:col-span-1'
              >
                <span
                  className={`tablet:cursor-pointer flex tablet:p-4 rounded tablet:border  ${
                    jobCard.id === displayedJob.id
                      ? 'bg-light-primary-hover/10 dark:bg-dark-primary-hover/10 dark:border-primary border-primary dark:text-dark-text text-light-text'
                      : 'hover:bg-light-headlines/5 dark:hover:bg-dark-headlines/5 tablet:border-transparent dark:hover:text-dark-text hover:text-light-text dark:border-transparent border-transparent tablet:hover:border-light-headlines/25 tablet:dark:hover:border-dark-headlines/25'
                  } font-light text-light-text dark:text-dark-text`}
                >
                  {jobCard.period}
                </span>
              </div>
              <div className='flex tablet:hidden tablet:pb-8 tablet:border-none tablet:relative flex-col gap-y-2 tablet:col-span-2 before:content-[""] before:rounded before:w-[7px] before:h-[7px] before:bg-primary before:absolute before:top-1 before:right-auto tablet:before:-left-5 before:-left-1'>
                <h3 className='flex font-medium gap-x-4 dark:text-dark-headlines text-title font-display text-light-headlines'>
                  {jobCard.position}
                  <span className='font-light text-light-text dark:text-dark-text'>
                    {jobCard.company}
                  </span>
                </h3>
                <p className='text text-light-text dark:text-dark-text'>
                  {jobCard.responsabilities}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {displayedJob && (
        <div
          className={`h-[260px] hidden tablet:flex tablet:pb-8 tablet:border-none flex-col gap-y-2 tablet:col-span-2`}
        >
          <h3 className='flex font-medium gap-x-4 dark:text-dark-headlines text-title font-display text-light-headlines'>
            {displayedJob.position}
            <span className='font-light text-light-text dark:text-dark-text'>
              {displayedJob.company}
            </span>
          </h3>
          <p className='text text-light-text dark:text-dark-text'>
            {displayedJob.responsabilities}
          </p>
        </div>
      )}
    </Section>
  );
};

export default JobExperience;
