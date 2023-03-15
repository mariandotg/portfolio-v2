import { ReactNode } from 'react';

interface Props {
  onClick: () => void;
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary';
  url?: string | undefined;
}

const Button = ({ onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      className='w-full px-6 py-3 italic font-bold text-center rounded bg-primary text-light font-monospace'
    >
      {children}
    </button>
  );
};

export default Button;
