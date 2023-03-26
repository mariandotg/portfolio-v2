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
  const contenedorRef = useRef<HTMLDivElement>(null);
  const [numMaxTags, setNumMaxTags] = useState(0);
  const [tagsMostradas, setTagsMostradas] = useState<Tag[]>([]);

  useEffect(() => {
    const contenedor = contenedorRef.current;
    if (!contenedor) return;
    const contenedorAncho = contenedor.getBoundingClientRect().width;
    const tagsRefs = Array.from(contenedor.children).map(
      (child) => child.getBoundingClientRect().width
    );
    let anchoActual = 0;
    let numMaxTags = 0;
    tagsRefs.some((tagRef) => {
      anchoActual += tagRef;
      numMaxTags++;
      return anchoActual >= contenedorAncho;
    });
    setNumMaxTags(numMaxTags);
  }, []);

  useEffect(() => {
    setTagsMostradas(props.project.tags.slice(0, numMaxTags));
  }, [props.project.tags, numMaxTags]);

  console.log(tagsMostradas);
  function mostrarMasTags() {
    const numTagsRestantes = props.project.tags.length - numMaxTags;
    const tagsRestantes = props.project.tags.slice(numMaxTags);
    setTagsMostradas([...tagsMostradas, ...tagsRestantes]);
    setNumMaxTags(numMaxTags + numTagsRestantes);
  }

  function acortarString(str: string): string {
    const maxLength = 27;
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
        <div className='flex flex-row gap-x-4' ref={contenedorRef}>
          {tagsMostradas.map((tag) => (
            <SkillItem key={tag.id} skill={tag.name} />
          ))}
          {props.project.tags.length > numMaxTags && (
            <button
              onClick={mostrarMasTags}
              className='dark:text-dark-headlines text-light-headlines'
            >
              +{props.project.tags.length - numMaxTags} más
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
