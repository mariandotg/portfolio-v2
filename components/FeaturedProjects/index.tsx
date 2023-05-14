import React, { useState } from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import { Project } from '@/models/domain/Project';

import Section from '../Section';
import ProjectCard from '../ProjectCard';
import SectionTitle from '../Section/SectionTitle';

const FeaturedProjects = () => {
  const data = useAppSelector(
    (state) => state.pageContent.sections.featuredProjects
  );

  const [currentProject, setCurrentProject] = useState<Project>(
    data.content.projects[0]
  );

  return (
    <Section>
      <SectionTitle
        button={{
          label: 'See all my projects',
          variant: 'secondary',
        }}
        emoji={data.emoji}
      >
        {data.title}
      </SectionTitle>
      <div className='flex flex-col gap-y-8 mobile:grid mobile:grid-cols-2 mobile:gap-4 tablet:col-span-1 tablet:grid-cols-1 tablet:gap-0'>
        {data.content.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            currentProject={currentProject}
            onHover={(project) => setCurrentProject(project)}
          />
        ))}
      </div>
      <div className='relative hidden w-full h-full tablet:flex tablet:col-span-2 tablet:row-span-1'>
        <div className='absolute bottom-0 z-10 w-full p-4 rounded h-1/5 dark:text-dark dark:bg-gradient-to-t from-light/75 to-transparent'>
          <h4 className='font-medium text-title'>{currentProject?.name}</h4>
          <p className='text-secondary'>{currentProject?.description}</p>
        </div>
        <img
          src={currentProject?.image}
          className='absolute object-cover w-full h-full rounded aspect-square'
          alt={currentProject ? currentProject.name : 'alt'}
        />
      </div>
    </Section>
  );
};

export default FeaturedProjects;
