import { NextPage } from 'next';
import React from 'react';

import Navlink from '@/components/Navbar/Navlink';

const Projects: NextPage = () => {
  return (
    <div className='dark:text-light'>
      <Navlink href='/'>Portfolio</Navlink>
      <Navlink href='/projects'>Proyectos</Navlink>
      <Navlink href='/blog'>Blog</Navlink>
      projects
    </div>
  );
};

export default Projects;
