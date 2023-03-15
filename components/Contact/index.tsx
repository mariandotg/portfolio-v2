import React from 'react';

import { useAppSelector } from '@/hooks/store/useAppSelector';

import Section from '../Section';
import Emoji from '../Emoji';

const Contact = () => {
  const data = useAppSelector((state) => state.pageContent.sections.contact);
  console.log(data);
  return (
    <Section>
      <h2 className='flex italic font-medium gap-x-4 text-section-title font-monospace text-light-headlines'>
        <Emoji emoji={data.emoji} />
        {data.title}
      </h2>
      <div className='flex flex-col gap-y-3'>
        <h3 className='font-medium text-title font-display text-light-headlines'>
          {data.content.ctaContact.text}
        </h3>
        <p className='text-light-text'>{data.content.ctaContactText.text}</p>
      </div>
      <div className='flex flex-col gap-y-7'>
        {data.content.contactForm.map((test) => (
          <div key={test.id} className='flex flex-col gap-y-3'>
            <label className='font-medium'>{test.label}</label>
            <input
              name={test.label}
              type={test.type}
              placeholder={test.placeholder}
              className='p-2 border-[1px] border-light-headlines rounded'
            />
          </div>
        ))}
      </div>
      <button className='w-full px-6 py-3 italic font-bold text-center rounded bg-primary text-light font-monospace'>
        {data.content.sendMail.label}
      </button>
    </Section>
  );
};

export default Contact;
