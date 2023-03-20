import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import SectionTitle from '../Section/SectionTitle';

const LatestArticles = () => {
  const data = useAppSelector(
    (state) => state.pageContent.sections.latestArticles
  );

  return (
    <Section>
      <SectionTitle>{data.title}</SectionTitle>
      <div className='w-full overflow-x-auto snap-x snap-mandatory'>
        <ul className='flex flex-row gap-4'>
          {data.content.articles.map((article) => (
            <li key={article.id} className='flex flex-col snap-center'>
              <span className='text-light-text'>{article.date.start}</span>
              <div className='flex flex-col gap-y-2 w-[329px]'>
                <img
                  src={article.image}
                  className='object-cover w-full rounded h-[187px]'
                />
                <h3 className='font-medium dark:text-dark-headlines text-title font-display text-light-headlines'>
                  {article.name}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default LatestArticles;
