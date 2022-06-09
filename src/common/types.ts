import { DefaultTheme } from 'styled-components';

export enum Theme {
  DARK,
}

export interface ITheme extends DefaultTheme {
  id: Theme;
  button: {
    background: string;
    text: string;
    hoverBg: string;
  };
  menu: {
    text: {
      normal: string;
      selected: string;
      hover: string;
    },
    background: string;
  },
}

export interface IButtonProps {
  children: string;
  pathToDownload?: string;
  menu: {
    text: {
      normal: string;
      selected: string;
      hover: string;
    };
    background: string;
  };
}

export interface IMenuOption {
  title: string;
  href: string;
}

export interface IMenuProps {
  options: IMenuOption[];
}

export interface IHeaderStyleProps {
  isFixed?: boolean;
}
