import Icon from '@/components/Icon';
import React from 'react';

interface Props {
  skill: string;
  illuminate?: boolean;
}

const SkillItem = ({ skill, illuminate }: Props) => {
  return (
    <span
      className={`relative whitespace-nowrap flex text ${
        illuminate &&
        'hover:after:bg-primary/40 hover:after:brightness-150 hover:after:blur-[8px] hover:after:content-[""] hover:after:absolute hover:after:h-[12px] hover:after:w-[12px] hover:after:z-[999]'
      } items-center text-light-text dark:text-dark-text group/item gap-x-2`}
    >
      <Icon
        value={skill.toLocaleLowerCase()}
        className={`duration-[0ms] ${
          illuminate && 'group-hover/item:fill-primary'
        } fill-light-text dark:fill-dark-text`}
      />
      {skill}
    </span>
  );
};

export default SkillItem;
