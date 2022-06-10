import translationPL from 'locales/pl';
import translationEN from 'locales/en';
import { IMenuOption } from 'common/types';
import { customMediaQuery } from 'utils';

export const LANGUAGES = {
  PL: {
    shortcut: 'pl',
    translation: translationPL,
  },
  EN: {
    shortcut: 'en',
    translation: translationEN,
  },
};

export const OPTIONS_HREF = {
  HOME: '/',
  EXPERIENCE: '/experience',
  ACCOMPLISHMENT: '/accomplishment',
  CONTACT: '/contact',
  UNKNOWN: '*',
};

export const CV_TITLE = 'CV.pdf';

export const MENU_ITEMS: IMenuOption[] = [
  {
    title: 'HOME',
    href: '/',
  },
  {
    title: 'EXPERIENCE',
    href: '/experience',
  },
  {
    title: 'ACCOMPLISHMENT',
    href: '/accomplishment',
  },
  {
    title: 'CONTACT',
    href: '/contact',
  },
];

export const MEDIA = {
  custom: customMediaQuery,
  XXL: customMediaQuery(1400),
  XL: customMediaQuery(1200),
  L: customMediaQuery(992),
  M: customMediaQuery(768),
  S: customMediaQuery(576),
};
