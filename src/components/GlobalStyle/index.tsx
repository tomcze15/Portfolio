import { ITheme } from 'common/types';
import { createGlobalStyle } from 'styled-components';

import COLORS from 'constants/colors';

export default createGlobalStyle<ITheme>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${(s) => s.text};
  }
  body,
  #root {
    height: 100%;
    max-width: 100vw;
    background-color:${(s) => s.background};
  }
`;
