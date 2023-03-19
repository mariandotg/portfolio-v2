import React from 'react';

import { Project } from '@/models/domain/Project';
import Icon from '../Icon';
import { MdArrowForward } from 'react-icons/md';

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  return (
    <div className='flex flex-col gap-y-2 group'>
      <img
        src={props.project.image}
        className='object-cover w-full rounded h-[187px]'
      />
      <h3 className='flex items-center font-medium group-hover:gap-x-2 gap-x-1 text-title font-display dark:text-dark-headlines text-light-headlines'>
        {props.project.name}
        <MdArrowForward />
      </h3>
      <p className='text-light-text dark:text-dark-text'>
        {props.project.description}
      </p>
      <span className='flex items-center text-light-text dark:text-dark-text gap-x-2 hover:text-primary'>
        <Icon
          value={props.project.tags[0].name.toLocaleLowerCase()}
          className='duration-[0ms] fill-light-text dark:fill-dark-text'
        />
        {props.project.tags[0].name}
      </span>
    </div>
  );
};

export default ProjectCard;
