import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import Emoji from '../Emoji';
import Icon from '../Icon';

const Skills = () => {
  const data = useAppSelector((state) => state.pageContent.sections.skills);

  return (
    <Section>
      <h2 className='flex italic font-medium gap-x-4 text-section-title font-monospace text-light-headlines'>
        <Emoji emoji={data.emoji} />
        {data.title}
      </h2>
      <div className='flex flex-col gap-y-4'>
        {data.content.skillCards.map((skillCard, majorIndex) => {
          return (
            <div key={skillCard.id} className='flex flex-col gap-y-2'>
              <h3 className='font-medium text-title font-display text-light-headlines'>
                {skillCard.title}
              </h3>
              <div className='flex flex-wrap gap-y-2 gap-x-4'>
                {skillCard.skills.map((skill, index) => {
                  return (
                    <span key={index} className='flex items-center gap-x-2'>
                      {majorIndex !== 2 && (
                        <Icon value={skill.toLocaleLowerCase()} />
                      )}
                      {skill}
                    </span>
                  );
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
