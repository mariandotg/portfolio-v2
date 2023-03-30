import React, { useState, useEffect, useRef } from 'react';

import { Project } from '@/models/domain/Project';
import { MdArrowForward } from 'react-icons/md';
import SkillItem from '../Skills/SkillItem';
import { Tag } from '@/models/domain/Tag';

interface Props {
  project: Project;
  currentProject: Project;
  onHover: (project: Project) => void;
  // animate: (opt: boolean) => void;
}

const ProjectCard = (props: Props) => {
  const [hovered, setHovered] = useState(
    props.project.id === props.currentProject.id
  );

  /* if (props.onHover && props.animate) {
    if (hovered) {
      props.animate(true);
      props.onHover(props.project);
    }
  } */
  const containerRef = useRef<HTMLDivElement>(null);
  const [restTags, setRestTags] = useState(0);
  const [numMaxTags, setNumMaxTags] = useState(0);
  const [displayedTags, setDisplayedTags] = useState<Tag[]>(props.project.tags);

  function acortarString(str: string): string {
    const maxLength = 27;
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + '...';
    }
    return str;
  }

  useEffect(() => {
    const container = containerRef.current!;
    const containerWidth = container.getBoundingClientRect().width;
    const tagsWidths = Array.from(container.children).map(
      (child) => child.getBoundingClientRect().width
    );
    let actualWidth = 24;
    let numMaxTags = 0;
    tagsWidths.forEach((tagRef) => {
      if (actualWidth + tagRef <= containerWidth) {
        actualWidth += tagRef;
        numMaxTags++;
      }
    });
    setNumMaxTags(numMaxTags);
  }, [props.project.tags, containerRef, setNumMaxTags]);

  useEffect(() => {
    const container = containerRef.current!;
    const containerWidth = container.getBoundingClientRect().width;
    const tagsWidths = Array.from(container.children).map(
      (child) => child.getBoundingClientRect().width
    );
    let actualWidth = 24;
    let numMaxTags = 0;
    tagsWidths.forEach((tagRef) => {
      if (actualWidth + tagRef <= containerWidth) {
        actualWidth += tagRef;
        numMaxTags++;
      }
    });
    setNumMaxTags(numMaxTags);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === containerRef.current) {
          const containerWidth = entry.target.getBoundingClientRect().width;
          let actualWidth = 24;
          let numMaxTags = 0;
          tagsWidths.forEach((tagRef) => {
            if (actualWidth + tagRef <= containerWidth) {
              actualWidth += tagRef;
              numMaxTags++;
            }
          });
          setNumMaxTags(numMaxTags);
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, setNumMaxTags]);

  useEffect(() => {
    setDisplayedTags(props.project.tags.slice(0, numMaxTags));
    setRestTags(props.project.tags.length - numMaxTags);
  }, [props.project.tags, numMaxTags]);

  console.log(props.project.name);
  console.log(props.project.tags.length);
  console.log(numMaxTags);

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
        className='object-cover w-full rounded h-[187px] flex'
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
        <div
          className='flex flex-row items-center w-full gap-x-4'
          ref={containerRef}
        >
          {displayedTags.map((tag, index) => (
            <SkillItem key={tag.id} skill={tag.name} />
          ))}
          {restTags !== 0 && (
            <span className='h-[20px] w-[20px] flex justify-center items-center rounded-[50px] bg-light-text dark:bg-dark-text text-dark-headlines dark:text-light-headlines font-medium text-[12px]'>
              +{restTags}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
