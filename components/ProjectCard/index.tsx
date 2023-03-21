import React from 'react';

import { Project } from '@/models/domain/Project';
import { MdArrowForward } from 'react-icons/md';
import SkillItem from '../Skills/SkillItem';

interface Props {
  project: Project;
}

const ProjectCard = (props: Props) => {
  return (
    <div className='flex flex-col cursor-pointer gap-y-2 group'>
      <img
        src={props.project.image}
        className='object-cover w-full rounded h-[187px]'
      />
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='flex items-center font-medium text-title group-hover:gap-x-2 gap-x-1 font-display dark:text-dark-headlines text-light-headlines'>
            {props.project.name}
            <MdArrowForward className='dark:text-dark-headlines text-light-headlines' />
          </h3>
          <p className='text-light-text dark:text-dark-text'>
            {props.project.description}
          </p>
        </div>
        <SkillItem skill={props.project.tags[0].name} />
      </div>
    </div>
  );
};

export default ProjectCard;
