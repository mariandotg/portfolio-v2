import { DiJava } from 'react-icons/di';
import {
  SiJavascript,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiBootstrap,
  SiContentful,
  SiCss3,
  SiCypress,
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
  SiNpm,
  SiYarn,
  SiMongodb,
  SiGithub,
  SiLinkedin,
} from 'react-icons/si';

interface Icons {
  [key: string]: any;
}

const icons: Icons = {
  es6: SiJavascript,
  'adobe illustrator': SiAdobeillustrator,
  'adobe photoshop': SiAdobephotoshop,
  bootstrap: SiBootstrap,
  contentful: SiContentful,
  css3: SiCss3,
  cypress: SiCypress,
  express: SiExpress,
  figma: SiFigma,
  git: SiGit,
  github: SiGithub,
  html5: SiHtml5,
  java: DiJava,
  jest: SiJest,
  kotlin: SiKotlin,
  linkedin: SiLinkedin,
  mongodb: SiMongodb,
  'next.js': SiNextdotjs,
  node: SiNodedotjs,
  npm: SiNpm,
  postgresql: SiPostgresql,
  postman: SiPostman,
  react: SiReact,
  redux: SiRedux,
  'spring boot': SiSpringboot,
  strapi: SiStrapi,
  'styled-components': SiStyledcomponents,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  yarn: SiYarn,
  default: SiReact,
};

interface Props {
  value: string;
  className?: string;
}

const Icon = ({ value, className }: Props) => {
  const SelectedIcon = icons[value] || icons.default;
  return <SelectedIcon className={className} stroke='currentColor' />;
};

export default Icon;
