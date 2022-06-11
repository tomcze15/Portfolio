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
  text: string;
  button: {
    background: string;
    text: string;
    hoverBg: string;
    shadow: string;
  };
  menu: {
    text: {
      normal: string;
      selected: string;
      hover: string;
    };
    background: string;
    shadow: string;
  };
  box: {
    text: string;
    background: string;
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

export interface IButtonProps {
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

export interface ISideProps {
  contectDirect?: Direction;
}

export interface ILayoutProps {
  children?: React.ReactNode;
}

export interface IBoxProps {
  children: React.ReactNode;
}
