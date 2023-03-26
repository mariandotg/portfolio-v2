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
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageLoad = () => {
    setIsAnimating(false);
  };

  return (
    <Section>
      <SectionTitle>{data.title}</SectionTitle>
      <div className='flex flex-col gap-y-8 tablet:col-span-1 tablet:gap-0'>
        {data.content.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            currentProject={currentProject}
            onHover={(project) => setCurrentProject(project)}
            animate={(opt) => setIsAnimating(opt)}
          />
        ))}
      </div>
      <div className='relative hidden w-full h-full tablet:flex tablet:col-span-2 tablet:row-span-1'>
        {isAnimating && <div className='loading' />}
        <img
          src={
            currentProject
              ? currentProject?.image
              : 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80'
          }
          className={`${
            isAnimating ? 'animate-animate-image' : ''
          } object-cover w-full rounded aspect-square`}
          onLoad={handleImageLoad}
          alt={currentProject ? currentProject.name : 'alt'}
        />
      </div>
    </Section>
  );
};

export default FeaturedProjects;
