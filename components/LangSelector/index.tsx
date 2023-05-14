import { useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp, MdLanguage } from 'react-icons/md';
import { useRouter } from 'next/router';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import { LOCALE_CODE } from '@/models/contentful/generated/contentful';

import Button from '../Button';

interface Lang {
  label: {
    [key: string]: string;
  };
  value: LOCALE_CODE;
}

const LangSelector = () => {
  const data = useAppSelector((state) => state.pageContent);

  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const langsList: Array<Lang> = [
    {
      label: {
        en: 'Spanish',
        es: 'Español',
      },
      value: 'es',
    },
    {
      label: {
        en: 'English',
        es: 'Inglés',
      },
      value: 'en',
    },
  ];

  const currentLanguage = langsList.find((item) => item.value === data.locale);

  const handleLangChange = () => {
    setIsOpen((prevValue: boolean) => !prevValue);
  };

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}`, `/${lang}`, { locale: lang });
    handleLangChange();
  };

  return (
    <div className='flex flex-col justify-center select-none'>
      <Button
        variant='secondary'
        className='flex items-center h-8 gap-2 not-italic'
        onClick={handleLangChange}
        icon
      >
        <MdLanguage className='w-[18px] h-[18px]' />
        {currentLanguage!.label[data.locale]}
        {!isOpen ? (
          <MdArrowDropDown className='w-[18px] h-[18px]' />
        ) : (
          <MdArrowDropUp className='w-[18px] h-[18px]' />
        )}
      </Button>
      <div className='relative w-full text-light-headlines dark:text-dark-headlines'>
        {isOpen && (
          <ul className='absolute top-2 z-20 text-right w-full rounded bg-light dark:bg-dark border-[1px] border-primary'>
            {langsList.map((item, index) => {
              return (
                <li
                  key={index}
                  value={item.value}
                  tabIndex={0}
                  className={`${
                    item.value === data.locale
                      ? 'cursor-not-allowed text-dark-tertiary-pressed'
                      : 'cursor-pointer text-light-headlines dark:text-dark-headlines dark:hover:text-dark-primary-hover hover:text-light-primary-hover'
                  } flex items-center px-2 py-1 w-fill`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && item.value !== data.locale)
                      return changeLanguage(item.value);
                  }}
                  onClick={() => {
                    if (item.value !== data.locale)
                      return changeLanguage(item.value);
                  }}
                >
                  {item.label[data.locale]}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LangSelector;
