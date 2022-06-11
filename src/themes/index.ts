import { ITheme, Theme } from 'common/types';
import COLORS from 'constants/colors';

const DarkTheme: ITheme = {
  id: Theme.DARK,
  text: COLORS.COLOR_5,
  button: {
    background: COLORS.COLOR_3,
    text: COLORS.COLOR_1,
    hoverBg: COLORS.COLOR_4,
    shadow: COLORS.COLOR_1,
  },
  menu: {
    text: {
      normal: COLORS.COLOR_5,
      selected: COLORS.COLOR_4,
      hover: COLORS.COLOR_4,
    },
    background: COLORS.COLOR_2,
    shadow: COLORS.BLACK,
  },
  footer: {
    title: COLORS.COLOR_4,
    text: {
      normal: COLORS.COLOR_5,
      selected: COLORS.COLOR_4,
      hover: COLORS.COLOR_4,
    },
    icon: {
      normal: COLORS.COLOR_4,
      hover: COLORS.COLOR_3,
    },
  },
  box: {
    text: COLORS.COLOR_5,
    background: COLORS.COLOR_2,
  },
};

export { DarkTheme };
