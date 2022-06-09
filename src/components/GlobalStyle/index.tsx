import { ITheme } from 'common/types';
import { createGlobalStyle } from 'styled-components';

import COLORS from 'constants/colors';

export default createGlobalStyle<ITheme>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    /* font-size: 24px;
    font-weight: 400; */
  }
  body,
  #root {
    height: 100vh;
    width: 100vw;
    background-color: ${COLORS.COLOR_1};
  }
`;
