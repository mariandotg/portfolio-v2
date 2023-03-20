import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const SectionTitle = ({ children }: Props) => {
  return (
    <h2 className='flex italic font-medium items-center after:content-[""] after:h-[1px] after:grow after:bg-primary dark:text-dark-headlines gap-x-4 font-monospace text-light-headlines'>
      {children}
    </h2>
  );
};

export default SectionTitle;
