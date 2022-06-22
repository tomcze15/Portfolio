import translationPL from 'locales/pl';
import translationEN from 'locales/en';
import { IContact, IRoute, ISocial } from 'common/types';
import { customMediaQuery } from 'utils';
import {
  IconEmail,
  IconPhone,
  LogoAdobeXD,
  LogoBlender,
  LogoConfluence,
  LogoCPlusPlus,
  LogoCSharp,
  LogoCSS,
  LogoCucumber,
  LogoExpress,
  LogoFacebook,
  LogoFigma,
  LogoGimp,
  LogoGithub,
  LogoGitlab,
  LogoHTML,
  LogoJest,
  LogoJira,
  LogoJS,
  LogoKrita,
  LogoLinkedin,
  LogoLinux,
  LogoMongoDB,
  LogoMS365,
  LogoMVC,
  LogoNextJS,
  LogoNode,
  LogoPassportJS,
  LogoPostgresSQL,
  LogoPostman,
  LogoQt,
  LogoReact,
  LogoRedux,
  LogoRxjs,
  LogoStorybook,
  LogoStyledcomponents,
  LogoTailwind,
  LogoTypeScript,
  LogoUK,
  LogoUnity,
  LogoVS,
  LogoWindows,
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
  SKILLS: '/skills',
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
    title: 'SKILLS',
    href: ROUTES_HREF.SKILLS,
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

export const TECHNOLOGIES = [
  [
    [LogoGitlab, LogoJira, LogoConfluence],
    [LogoReact, LogoTypeScript, LogoRxjs],
  ],
  [
    [LogoHTML, LogoCSS],
    [LogoCucumber, LogoJest],
    [LogoVS, LogoLinux],
  ],
];

export const SKILLS = [
  {
    name: 'React',
    icon: LogoReact,
  },
  {
    name: 'Typescript',
    icon: LogoTypeScript,
  },
  {
    name: 'HTML',
    icon: LogoHTML,
  },
  {
    name: 'CSS',
    icon: LogoCSS,
  },
  {
    name: 'JavaScript',
    icon: LogoJS,
  },
  {
    name: 'Styledcomponents',
    icon: LogoStyledcomponents,
  },
  {
    name: 'Redux',
    icon: LogoRedux,
  },
  {
    name: 'Tailwind',
    icon: LogoTailwind,
  },
  {
    name: 'RxJS',
    icon: LogoRxjs,
  },
  {
    name: 'StoryBook',
    icon: LogoStorybook,
  },
  {
    name: 'Figma',
    icon: LogoFigma,
  },
  {
    name: 'Adobe XD',
    icon: LogoAdobeXD,
  },
  {
    name: 'Git',
    icon: LogoGithub,
  },
  {
    name: 'NodeJs',
    icon: LogoNode,
  },
  {
    name: 'ExpressJS',
    icon: LogoExpress,
  },
  {
    name: 'MongoDB',
    icon: LogoMongoDB,
  },
  {
    name: 'PassportJS',
    icon: LogoPassportJS,
  },
  {
    name: 'English',
    icon: LogoUK,
  },
  {
    name: 'NextJs',
    icon: LogoNextJS,
  },
  {
    name: 'Postman',
    icon: LogoPostman,
  },
  {
    name: 'C++',
    icon: LogoCPlusPlus,
  },
  {
    name: 'C#',
    icon: LogoCSharp,
  },
  {
    name: 'Unity',
    icon: LogoUnity,
  },
  {
    name: 'Blender',
    icon: LogoBlender,
  },
  {
    name: 'Gimp',
    icon: LogoGimp,
  },
  {
    name: 'Krita',
    icon: LogoKrita,
  },
  {
    name: 'Qt',
    icon: LogoQt,
  },
  {
    name: '.NET MVC',
    icon: LogoMVC,
  },
  {
    name: 'Windows',
    icon: LogoWindows,
  },
  {
    name: 'Linux',
    icon: LogoLinux,
  },
  {
    name: 'Office 365',
    icon: LogoMS365,
  },
  {
    name: 'PostgreSQL',
    icon: LogoPostgresSQL,
  },
];
