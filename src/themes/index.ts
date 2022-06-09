import { ITheme, Theme } from 'common/types';
import COLORS from 'constants/colors';

const DarkTheme: ITheme = {
  id: Theme.DARK,
  button: {
    background: COLORS.COLOR_3,
    text: COLORS.COLOR_1,
    hoverBg: COLORS.COLOR_4,
  },
  menu: {
    text: {
      normal: COLORS.COLOR_5,
      selected: COLORS.COLOR_4,
      hover: COLORS.COLOR_4,
    },
    background: COLORS.COLOR_2,
  },
};

export { DarkTheme };
