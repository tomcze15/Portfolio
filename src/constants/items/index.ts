import translationPL from 'locales/pl';
import translationEN from 'locales/en';
import { IContact, IRoute, ISocial } from 'common/types';
import { customMediaQuery } from 'utils';
import {
  IconEmail,
  IconPhone,
  LogoConfluence,
  LogoFacebook,
  LogoGithub,
  LogoGitlab,
  LogoJira,
  LogoLinkedin,
} from 'assets';

export const MY_NAME = 'Tomasz Czerwiński';

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

export const ROUTES_HREF = {
  HOME: '/',
  EXPERIENCE: '/experience',
  ACCOMPLISHMENT: '/accomplishment',
  CONTACT: '/contact',
  UNKNOWN: '*',
};

export const CV_PATH = 'Tomasz-Czerwiński-CV.pdf';

export const ROUTES: IRoute[] = [
  {
    title: 'HOME',
    href: ROUTES_HREF.HOME,
  },
  {
    title: 'EXPERIENCE',
    href: ROUTES_HREF.EXPERIENCE,
  },
  {
    title: 'ACCOMPLISHMENT',
    href: ROUTES_HREF.ACCOMPLISHMENT,
  },
  {
    title: 'CONTACT',
    href: ROUTES_HREF.CONTACT,
  },
];

export const SOCIALS: ISocial[] = [
  {
    icon: LogoFacebook,
    href: 'https://www.facebook.com/tomek.czerwinski.5',
  },
  {
    icon: LogoLinkedin,
    href: 'https://www.linkedin.com/in/tomasz-czerwiński/',
  },
  {
    icon: LogoGithub,
    href: 'https://github.com/tomcze15',
  },
];

export const CONTACTS: IContact[] = [
  {
    icon: IconPhone,
    text: '+48 691 820 555',
  },
  {
    icon: IconEmail,
    text: 'tomasz.czerwinski.1997@gmail.com',
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

export const TECHNOLOGIES = {
  TOP: {
    PART1: [LogoGitlab, LogoJira, LogoConfluence],
  },
  BOTTOm: {
    PART1: [LogoGitlab, LogoJira],
    PART2: [LogoGitlab, LogoJira],
    PART3: [LogoGitlab, LogoJira],
  },
};
