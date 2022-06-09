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
}

export interface IButtonProps {
  children: string;
  pathToDownload?: string;
}
