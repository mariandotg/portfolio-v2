import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import SectionTitle from '../Section/SectionTitle';
import SkillItem from './SkillItem';

const Skills = () => {
  const data = useAppSelector((state) => state.pageContent.sections.skills);

  return (
    <Section>
      <SectionTitle>{data.title}</SectionTitle>
      <p className='text-light-text dark:text-dark-text'>
        {data.content.skillsDescription.text}
      </p>
      <div className='flex flex-col gap-y-4 tablet:grid tablet:grid-cols-2 tablet:gap-8 tablet:col-span-2'>
        {data.content.skillCards.map((skillCard) => {
          return (
            <div
              key={skillCard.id}
              className='flex flex-col gap-y-2 tablet:col-span-1'
            >
              <h3 className='font-medium text-title dark:text-dark-headlines font-display text-light-headlines'>
                {skillCard.title}
              </h3>
              <div className='flex flex-wrap gap-y-2 gap-x-4'>
                {skillCard.skills.map((skill, index) => {
                  return <SkillItem key={index} skill={skill} />;
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
