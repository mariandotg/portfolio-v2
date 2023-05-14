const states = {
  primary: {
    hover:
      'dark:hover:bg-dark-primary-hover dark:active:bg-dark-primary-pressed active:bg-light-primary-pressed hover:bg-light-primary-hover',
  },
  secondary: {
    hover:
      'dark:hover:bg-dark-primary-hover/25 dark:active:bg-dark-primary-pressed/25 active:bg-light-primary-pressed/25 hover:bg-light-primary-hover/25',
  },
  tertiary: {
    hover:
      'dark:hover:bg-dark-tertiary-hover dark:active:bg-dark-tertiary-pressed active:bg-light-tertiary-pressed hover:bg-light-tertiary-hover',
  },
};

export const variants = {
  primary: `bg-primary border-transparent font-bold text-light`,
  'primary-hover': states.primary.hover,
  secondary: `bg-transparent border-primary underline underline-offset-2 font-bold text-primary`,
  'secondary-hover': states.secondary.hover,
  tertiary: `bg-tertiary border-transparent text-light`,
  'tertiary-hover': states.tertiary.hover,
};
