import React from 'react';

import { Project } from '@/models/domain/Project';

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  return (
    <div className='flex flex-col gap-y-2 text'>
      <img
        src={props.project.image}
        className='object-cover w-full rounded h-[187px]'
      />
      <h3 className='font-medium text-title font-display text-light-headlines'>
        {props.project.name}
      </h3>
      <p className='text-light-text'>{props.project.description}</p>
      <span className='font-medium '>{props.project.tags[0].name}</span>
    </div>
  );
};

export default ProjectCard;
