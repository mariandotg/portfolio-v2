import React, { useState } from 'react';

import { Project } from '@/models/domain/Project';
import { MdArrowForward } from 'react-icons/md';
import SkillItem from '../Skills/SkillItem';

interface Props {
  project: Project;
  currentProject: Project;
  onHover: (project: Project) => void;
  animate: (opt: boolean) => void;
}

const ProjectCard = (props: Props) => {
  const [hovered, setHovered] = useState(
    props.project.id === props.currentProject.id
  );

  if (props.onHover && props.animate) {
    if (hovered) {
      props.animate(true);
      props.onHover(props.project);
    }
  }

  function acortarString(str: string): string {
    const maxLength = 47;
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + '...';
    }
    return str;
  }
  return (
    <div
      className={`flex flex-col cursor-pointer gap-y-2 group tablet:p-4 tablet:border-[1px] rounded ${
        hovered
          ? 'tablet:dark:border-primary tablet:border-primary'
          : 'tablet:border-transparent '
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={props.project.image}
        className='object-cover w-full tablet:hidden rounded h-[187px] flex'
      />
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='flex items-center font-medium whitespace-nowrap text-title group-hover:gap-x-2 gap-x-1 font-display dark:text-dark-headlines text-light-headlines'>
            {props.project.name}
            <MdArrowForward className='duration-[0ms] dark:text-dark-headlines text-light-headlines' />
          </h3>
          <p className='text-light-text dark:text-dark-text'>
            {acortarString(props.project.description)}
          </p>
        </div>
        <SkillItem skill={props.project.tags[0].name} />
      </div>
    </div>
  );
};

export default ProjectCard;
