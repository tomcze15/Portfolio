import { DefaultTheme } from 'styled-components';

export enum Theme {
  DARK,
}

export interface ITheme extends DefaultTheme {
  id: Theme;
}
