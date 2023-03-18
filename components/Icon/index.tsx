import { DiJava } from 'react-icons/di';
import {
  SiJavascript,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBootstrap,
  SiContentful,
  SiCss3,
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiKotlin,
  SiReact,
  SiRedux,
  SiSpringboot,
  SiStrapi,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

interface Icons {
  [key: string]: any;
}

const icons: Icons = {
  javascript: SiJavascript,
  adobeillustrator: SiAdobeillustrator,
  adobephotoshop: SiAdobephotoshop,
  bootstrap: SiBootstrap,
  contentful: SiContentful,
  css3: SiCss3,
  'express.js': SiExpress,
  figma: SiFigma,
  git: SiGit,
  html5: SiHtml5,
  java: DiJava,
  jest: SiJest,
  kotlin: SiKotlin,
  'next.js': SiNextdotjs,
  'node.js': SiNodedotjs,
  postgresql: SiPostgresql,
  postman: SiPostman,
  react: SiReact,
  redux: SiRedux,
  springboot: SiSpringboot,
  strapi: SiStrapi,
  'styled-components': SiStyledcomponents,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  default: SiReact,
};

interface Props {
  value: string;
  className?: string;
}

const Icon = ({ value, className }: Props) => {
  const SelectedIcon = icons[value] || icons.default;
  return <SelectedIcon className={className} />;
};

export default Icon;
