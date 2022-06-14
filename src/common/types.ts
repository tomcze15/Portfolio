import React from 'react';
import { DefaultTheme } from 'styled-components';

export type SVGType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export enum Theme {
  DARK,
}

export enum Language {
  PL,
  EN,
}

export type Direction = 'Left' | 'Right';

export interface ITheme extends DefaultTheme {
  id: Theme;
  background: string;
  text: string;
  hello: string;
  burgerButton: {
    background: string;
  };
  button: {
    background: string;
    text: string;
    hoverBg: string;
    shadow: string;
  };
  mobileMenu: {
    background: string;
    buttonBg: string;
  };
  menu: {
    text: {
      normal: string;
      selected: string;
      hover: string;
    };
    background: {
      normal: string;
      transparent: string;
    };
    shadow: string;
  };
  circles: {
    left: string;
    right: string;
  };
  box: {
    text: string;
    background: string;
  };
  contact: {
    text: string;
  };
  card: {
    top: {
      background: string;
    };
    bottom: {
      background: string;
      text: string;
    };
    shadow: string;
  };
  footer: {
    title: string;
    text: {
      normal: string;
      selected: string;
      hover: string;
    };
    icon: {
      normal: string;
      hover: string;
    };
  };
}

export interface IRoute {
  title: string;
  href: string;
}

export interface ISocial {
  icon: SVGType;
  href: string;
}

export interface IContact {
  icon: string;
  text: string;
}

export interface ISkill {
  name: string;
  icon: SVGType | string;
}

export interface INavButtonProps {
  children: string;
  pathToDownload?: string;
}

export interface IMenuProps {
  options: IRoute[];
}

export interface IHeaderStyleProps {
  isFixed?: boolean;
}

export interface ILanguageOptionProps {
  lng: Language;
  currentLng: Language;
}

export interface ILayoutProps {
  children?: React.ReactNode;
}

export interface IBoxProps {
  children: React.ReactNode;
}

export interface ISideProps {
  contectDirect?: Direction;
}

export interface IButtonProps {
  onClick?: () => void;
}

export interface ICardPorps extends ISkill {}
