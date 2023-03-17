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
  primary: `bg-primary border-transparent text-light ${states.primary.hover}`,
  secondary: `bg-transparent border-primary text-primary dark:border-dark-primary dark:text-dark-primary ${states.secondary.hover}`,
  tertiary: `bg-tertiary text-light ${states.tertiary.hover}`,
};
