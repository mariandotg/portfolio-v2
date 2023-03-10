import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';

const FeaturedProjects = () => {
  const data = useAppSelector(
    (state) => state.pageContent.sections.featuredProjects
  );

  return (
    <Section>
      <h2 className='italic font-medium text-section-title font-monospace text-light-headlines'>
        {data.title}
      </h2>
      <div className='flex flex-col gap-y-8'>
        {data.content.projects.map((p) => {
          return (
            <div key={p.id} className='flex flex-col gap-y-2 text'>
              <img
                src={p.image}
                className='object-cover w-full rounded h-[187px]'
              />
              <h3 className='font-medium text-title font-display text-light-headlines'>
                {p.name}
              </h3>
              <p className='text-light-text'>{p.description}</p>
              <span className='font-medium '>{p.tags[0].name}</span>
            </div>
          );
        })}
      </div>
      <button className='w-full px-6 py-3 italic font-bold text-center rounded bg-light-text text-light font-monospace'>
        View more
      </button>
    </Section>
  );
};

export default FeaturedProjects;
