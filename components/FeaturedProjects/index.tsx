import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import ProjectCard from '../ProjectCard';
import Emoji from '../Emoji';

const FeaturedProjects = () => {
  const data = useAppSelector(
    (state) => state.pageContent.sections.featuredProjects
  );

  return (
    <Section>
      <h2 className='flex italic font-medium gap-x-4 text-section-title font-monospace text-light-headlines'>
        <Emoji emoji={data.emoji} />
        {data.title}
      </h2>
      <div className='flex flex-col gap-y-8'>
        {data.content.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <button className='w-full px-6 py-3 italic font-bold text-center rounded bg-light-text text-light font-monospace'>
        View more
      </button>
    </Section>
  );
};

export default FeaturedProjects;
