import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import SectionTitle from '../Section/SectionTitle';
import SkillItem from './SkillItem';
import Icon from '../Icon';

const Skills = () => {
  const data = useAppSelector((state) => state.pageContent.sections.skills);

  return (
    <Section>
      <SectionTitle emoji={data.emoji}>{data.title}</SectionTitle>
      <p className='col-span-3 text text-light-text dark:text-dark-text'>
        {data.content.skillsDescription.text}
      </p>
      <div className='relative flex flex-col w-full gap-4 mobile:grid mobile:grid-cols-2 tablet:gap-4 tablet:grid-cols-3 tablet:col-span-3 '>
        {data.content.skillCards.map((skillCard, index) => {
          return (
            <div
              key={skillCard.id}
              className={`flex flex-col border border-transparent rounded gap-y-2 ${
                index === data.content.skillCards.length - 1
                  ? 'mobile:col-span-2 tablet:col-span-1'
                  : 'mobile:col-span-1'
              }`}
            >
              <h3 className='flex items-center font-medium gap-x-2 dark:text-dark-headlines text-title text-light-headlines'>
                <Icon
                  value={skillCard.title.toLocaleLowerCase()}
                  className='duration-[0ms] dark:text-dark-headlines text-light-headlines'
                />
                {skillCard.title}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skillCard.skills.map((skill, index) => {
                  return <SkillItem key={index} skill={skill} illuminate />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
