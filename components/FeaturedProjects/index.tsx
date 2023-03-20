import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import ProjectCard from '../ProjectCard';
import SectionTitle from '../Section/SectionTitle';

const FeaturedProjects = () => {
  const data = useAppSelector(
    (state) => state.pageContent.sections.featuredProjects
  );

  return (
    <Section>
      <SectionTitle>{data.title}</SectionTitle>
      <div className='flex flex-col gap-y-8'>
        {data.content.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default FeaturedProjects;
