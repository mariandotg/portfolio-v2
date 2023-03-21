import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <section className='flex flex-col gap-y-4 tablet:grid tablet:gap-8 tablet:grid-cols-3'>
      {children}
    </section>
  );
};

export default Section;
