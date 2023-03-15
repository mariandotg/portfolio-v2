import Adobeillustrator from '@/public/adobeillustrator.svg';
import Adobephotoshop from '@/public/adobephotoshop.svg';
import Bootstrap from '@/public/bootstrap.svg';
import Contentful from '@/public/contentful.svg';
import Css3 from '@/public/css3.svg';
import Express from '@/public/express.svg';
import Figma from '@/public/figma.svg';
import Git from '@/public/git.svg';
import Github from '@/public/github.svg';
import Html5 from '@/public/html5.svg';
import Intellijidea from '@/public/intellijidea.svg';
import Java from '@/public/java.svg';
import Jest from '@/public/jest.svg';
import Junit5 from '@/public/junit5.svg';
import Linkedin from '@/public/linkedin.svg';
import Nextjs from '@/public/nextdotjs.svg';
import Nodejs from '@/public/nodedotjs.svg';
import Postgresql from '@/public/postgresql.svg';
import Postman from '@/public/postman.svg';
import Reacticon from '@/public/react.svg';
import Redux from '@/public/redux.svg';
import Spring from '@/public/spring.svg';
import Strapi from '@/public/strapi.svg';
import Styledcomponents from '@/public/styledcomponents.svg';
import Tailwindcss from '@/public/tailwindcss.svg';
import Twitter from '@/public/twitter.svg';
import Typescript from '@/public/typescript.svg';
import Visualstudiocode from '@/public/visualstudiocode.svg';
import Javascript from '@/public/javascript.svg';
import Default from '@/public/default.svg';

const icons = new Map([
  ['javascript', Javascript],
  ['adobeillustrator', Adobeillustrator],
  ['adobephotoshop', Adobephotoshop],
  ['bootstrap', Bootstrap],
  ['contentful', Contentful],
  ['css3', Css3],
  ['express.js', Express],
  ['figma', Figma],
  ['git', Git],
  ['github', Github],
  ['html5', Html5],
  ['intellijidea', Intellijidea],
  ['java', Java],
  ['jest', Jest],
  ['junit5', Junit5],
  ['linkedin', Linkedin],
  ['next.js', Nextjs],
  ['node.js', Nodejs],
  ['postgresql', Postgresql],
  ['postman', Postman],
  ['react', Reacticon],
  ['redux', Redux],
  ['spring', Spring],
  ['strapi', Strapi],
  ['styledcomponents', Styledcomponents],
  ['tailwindcss', Tailwindcss],
  ['twitter', Twitter],
  ['typescript', Typescript],
  ['visualstudiocode', Visualstudiocode],
  ['default', Default],
]);

interface Props {
  value?: string;
}

const Icon = ({ value }: Props) => {
  const SelectedIcon = icons.get(value!) || icons.get('default');
  return (
    <SelectedIcon
      viewBox='0 0 24 24'
      className='h-[1.125em] w-[1.125em] aspect-square'
    />
  );
};

export default Icon;
