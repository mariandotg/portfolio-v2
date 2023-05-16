import { ReactNode } from 'react';

import { variants } from './buttonStyles';

interface Props {
  variant: 'primary' | 'secondary' | 'tertiary';
  children: ReactNode;
  icon?: boolean;
  onClick?: () => void;
  className?: string;
  url?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const Button = ({
  onClick,
  children,
  className,
  variant,
  url,
  icon,
  disabled,
  ariaLabel,
}: Props) => {
  const styles = `${variants[variant]} ${className} ${
    icon ? 'p-[6px] w-fit rounded-[8px]' : 'px-6 py-3 w-full'
  } ${
    disabled ? 'opacity-30 pointer-events-none' : variants[`${variant}-hover`]
  }
  border italic text-center flex items-center justify-center gap-2 text-secondary whitespace-nowrap transition rounded font-monospace`;

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
        <button
          className={styles}
          onClick={onClick}
          disabled={disabled}
          aria-label={icon ? ariaLabel : undefined}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
