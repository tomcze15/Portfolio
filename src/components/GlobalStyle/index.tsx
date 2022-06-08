import { ITheme } from 'common/types';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<ITheme>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body,
  #root {
    height: 100vh;
    width: 100vw;
  }
`;
