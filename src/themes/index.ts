import { ITheme, Theme } from 'common/types';
import COLORS from 'constants/colors';

const DarkTheme: ITheme = {
  id: Theme.DARK,
  background: COLORS.COLOR_1,
  text: COLORS.COLOR_5,
  hello: COLORS.COLOR_4,
  burgerButton: {
    background: COLORS.COLOR_4,
  },
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
    background: {
      normal: COLORS.COLOR_2,
      transparent: COLORS.TRANSPARENT,
    },
    shadow: COLORS.BLACK,
  },
  circles: {
    left: COLORS.LINEAR_1,
    right: COLORS.LINEAR_2,
  },
  box: {
    text: COLORS.COLOR_5,
    background: COLORS.COLOR_2,
  },
  contact: {
    text: COLORS.COLOR_4,
  },
  card: {
    top: {
      background: COLORS.COLOR_5,
    },
    bottom: {
      background: COLORS.COLOR_2,
      text: COLORS.COLOR_4,
    },
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
      normal: COLORS.COLOR_3,
      hover: COLORS.COLOR_4,
    },
  },
};

export { DarkTheme };
