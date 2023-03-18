import { ReactNode } from 'react';
import { variants } from './buttonStyles';

interface Props {
  variant: 'primary' | 'secondary' | 'tertiary';
  children: ReactNode;
  icon?: boolean;
  onClick?: () => void;
  className?: string;
  url?: string;
}

const Button = ({
  onClick,
  children,
  className,
  variant,
  url,
  icon,
}: Props) => {
  const styles = `${variants[variant]} ${className} ${
    icon ? 'p-[6px] w-fit border-[1px] rounded-[8px]' : 'px-6 py-3 w-full'
  }
  border-2 italic font-bold text-center whitespace-nowrap transition rounded font-monospace`;

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
