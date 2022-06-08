import { FunctionComponent, StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'components';
import { DarkTheme } from 'themes';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <StrictMode>
      <GlobalStyle {...DarkTheme} />
      <ThemeProvider theme={DarkTheme}>
        <div />
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
