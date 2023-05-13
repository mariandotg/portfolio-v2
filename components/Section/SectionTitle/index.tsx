import { ReactNode } from 'react';

import { Button as ButtonModel } from '@/models/domain/Button';

import Button from '@/components/Button';
import Emoji from '@/components/Emoji';

interface Props {
  children: ReactNode;
  button?: ButtonModel;
  emoji?: string;
}
const SectionTitle = ({ children, button, emoji }: Props) => {
  return (
    <div className='flex justify-between tablet:col-span-3'>
      <h2
        className={`flex italic font-medium items-center after:content-[""] after:h-[1px] after:grow ${
          button && 'pr-4'
        } w-full after:bg-primary dark:text-dark-headlines gap-x-4 font-monospace text-light-headlines`}
      >
        <Emoji emoji={emoji} />
        {children}
      </h2>
      {button && (
        <Button
          variant={button.variant}
          className='w-fit'
          url={button.url && button.url}
          icon
        >
          {button.label}
        </Button>
      )}
    </div>
  );
};

export default SectionTitle;
