import React from 'react';

import { Project } from '@/models/domain/Project';
import Icon from '../Icon';

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  return (
    <div className='flex flex-col gap-y-2'>
      <img
        src={props.project.image}
        className='object-cover w-full rounded h-[187px]'
      />
      <h3 className='font-medium text-title font-display dark:text-dark-headlines text-light-headlines'>
        {props.project.name}
      </h3>
      <p className='text-light-text dark:text-dark-text'>
        {props.project.description}
      </p>
      <span className='flex items-center group text-light-text dark:text-dark-text gap-x-2 hover:text-primary'>
        <Icon
          value={props.project.tags[0].name.toLocaleLowerCase()}
          className='duration-[0ms] group-hover:fill-primary fill-light-text dark:fill-dark-text'
        />
        {props.project.tags[0].name}
      </span>
    </div>
  );
};

export default ProjectCard;
