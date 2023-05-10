import React from 'react';

import { Emojis } from '@/models/domain/Emojis';

import Pin from '@/public/pin.svg';
import Dart from '@/public/dart.svg';
import Business from '@/public/business.svg';
import Article from '@/public/article.svg';
import Mail from '@/public/mail.svg';
import Default from '@/public/default.svg';

interface Props {
  emoji?: string;
}

const emojis: Emojis = {
  pin: Pin,
  dart: Dart,
  business: Business,
  article: Article,
  mail: Mail,
  default: Default,
};

const Emoji = ({ emoji }: Props) => {
  const SelectedEmoji = emojis[emoji || 'default'];

  return <SelectedEmoji width={24} height={24} />;
};

export default Emoji;
