import React, { useState } from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import ProjectCard from '../ProjectCard';
import SectionTitle from '../Section/SectionTitle';
import { Project } from '@/models/domain/Project';

const FeaturedProjects = () => {
  const data = useAppSelector(
    (state) => state.pageContent.sections.featuredProjects
  );

  const [currentProject, setCurrentProject] = useState<Project>(
    data.content.projects[0]
  );

  return (
    <Section>
      <SectionTitle>{data.title}</SectionTitle>
      <div className='flex flex-col gap-y-8 tablet:col-span-1 tablet:grid tablet:grid-cols-1 tablet:gap-0'>
        {data.content.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            currentProject={currentProject}
            onHover={(project) => setCurrentProject(project)}
            /* animate={(opt) => setIsAnimating(opt)} */
          />
        ))}
      </div>
      <div className='relative hidden w-full h-full tablet:flex tablet:col-span-2 tablet:row-span-1'>
        <div className='absolute bottom-0 z-10 w-full p-4 dark:text-dark dark:bg-gradient-to-t from-light/75 to-transparent'>
          <h4 className='font-medium text-title'>{currentProject?.name}</h4>
          <p className='text'>{currentProject?.description}</p>
        </div>
        <img
          src={
            currentProject
              ? currentProject?.image
              : 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80'
          }
          className={`absolute object-cover rounded w-full h-full aspect-square`}
          alt={currentProject ? currentProject.name : 'alt'}
        />
      </div>
    </Section>
  );
};

export default FeaturedProjects;
