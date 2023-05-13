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
      <SectionTitle
        button={{
          label: 'See all my articles',
          variant: 'secondary',
        }}
        emoji={data.emoji}
      >
        {data.title}
      </SectionTitle>
      <div className='flex w-full snap-x tablet:col-span-3 snap-mandatory'>
        <ul className='flex flex-col w-full gap-4 mobile:grid mobile:grid-cols-2 mobile:flex-row tablet:gap-8 tablet:grid tablet:grid-cols-3'>
          {data.content.articles.map((article) => (
            <li
              key={article.id}
              className='flex flex-col cursor-pointer group tablet:col-span-1 snap-center gap-y-1'
            >
              <span className='text-light-text text'>{article.date.start}</span>
              <div className='relative flex w-full overflow-hidden h-[135px] mobile:h-[100px] rounded'>
                <img
                  src={article.image}
                  className='top-0 left-0 object-cover w-full h-full rounded group-hover:scale-110 aspect-video'
                />
              </div>
              <h3 className='font-medium dark:group-hover:text-primary group-hover:text-primary dark:text-dark-headlines font-display text-light-headlines'>
                {article.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default LatestArticles;
