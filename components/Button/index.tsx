import { ReactNode } from 'react';
import { variants } from './buttonStyles';

interface Props {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  url?: string;
}

const Button = ({ onClick, children, className, variant, url }: Props) => {
  const styles = `${variants[variant]} ${className} border-2 w-full px-6 py-3 italic font-bold text-center transition rounded font-monospace`;

  return (
    <>
      {url ? (
        <a
          className={styles}
          onClick={onClick}
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          {children}
        </a>
      ) : (
        <button className={styles} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
