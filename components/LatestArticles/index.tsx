import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import SectionTitle from '../Section/SectionTitle';
import SkillItem from '../Skills/SkillItem';
import Image from 'next/image';

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
      <div className='flex w-full snap-x tablet:col-span-3'>
        <ul className='flex flex-col w-full gap-4 mobile:grid mobile:grid-cols-2 tablet:grid-cols-3'>
          {data.content.articles.map((article, index) => (
            <li
              key={article.id}
              className={`cursor-pointer group ${
                index === 0
                  ? 'mobile:col-span-2 tablet:col-span-1'
                  : 'mobile:col-span-1'
              }`}
            >
              <Link href='/test' className='flex flex-col gap-y-2'>
                <span className='font-light text-secondary text-light-text dark:text-dark-text'>
                  {article.date.start}
                </span>
                <div
                  className={`relative flex w-full overflow-hidden h-[135px]  ${
                    index === 0 ? 'mobile:h-[135px]' : 'mobile:h-[100px]'
                  } tablet:h-[135px] rounded`}
                >
                  <h3 className='absolute z-20 font-medium bottom-2 left-2 text-article dark:text-dark-headlines font-display text-light-headlines'>
                    {article.name}
                  </h3>
                  <div className='absolute top-0 left-0 z-10 flex items-end justify-center w-full h-full p-4 opacity-100 tablet:opacity-0 group-hover:opacity-100 tablet:bg-dark/25'>
                    <MdArrowOutward className='absolute w-5 h-5 opacity-100 tablet:opacity-0 right-2 top-2 text-dark-headlines group-hover:opacity-100' />
                  </div>
                  <Image
                    src={article.image}
                    alt={`${article.name} image`}
                    className='top-0 left-0 object-cover rounded aspect-video'
                    fill={true}
                  />
                </div>
                <div className='flex flex-row items-center w-full gap-2'>
                  <SkillItem
                    key={article.tags[0].id}
                    skill={article.tags[0].name}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default LatestArticles;
