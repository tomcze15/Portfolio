import { FunctionComponent, StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle, Menu, Routes } from 'components';
import { DarkTheme } from 'themes';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <StrictMode>
      <GlobalStyle {...DarkTheme} />
      <ThemeProvider theme={DarkTheme}>
        <Router>
          <Menu />
          <Routes />
          <div style={{ height: 1000 }} />
        </Router>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
