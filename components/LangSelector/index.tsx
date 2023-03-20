import { useState } from 'react';
import { useRouter } from 'next/router';
import { LOCALE_CODE } from '@/models/contentful/generated/contentful';
import { useAppSelector } from '@/hooks/store/useAppSelector';
import { MdArrowDropDown, MdArrowDropUp, MdLanguage } from 'react-icons/md';
import Button from '../Button';

interface Lang {
  label: {
    [key: string]: string;
  };
  value: LOCALE_CODE;
}

const LangSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const data = useAppSelector((state) => state.pageContent);

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
    <div className='flex flex-col justify-center select-none text-primary'>
      <Button
        variant='secondary'
        className='flex items-center h-8 gap-2 not-italic font-medium font-body'
        onClick={handleLangChange}
        icon
      >
        <MdLanguage />
        {currentLanguage!.label[data.locale]}
        {!isOpen ? <MdArrowDropDown /> : <MdArrowDropUp />}
      </Button>
      <div className='relative w-full text-light-headlines dark:text-dark-headlines'>
        {isOpen && (
          <ul className='absolute transition-transform top-2 z-20 text-right w-full rounded bg-light dark:bg-dark border-[1px] border-primary'>
            {langsList.map((item, index) => {
              return (
                <li
                  key={index}
                  value={item.value}
                  tabIndex={0}
                  className={`${
                    item.value === data.locale
                      ? 'cursor-not-allowed dark:text-dark-tertiary-pressed text-light-tertiary-pressed'
                      : 'cursor-pointer dark:hover:text-dark-primary-hover hover:text-light-primary-hover'
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
