import { ITheme } from 'common/types';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle<ITheme>`
  * {
    box-sizing: border-box;
  }
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;

    & h1,h2,h3,h4,h5 {
      margin: 0;
      padding: 0;
    }
  }
`;
