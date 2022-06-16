import { FunctionComponent, StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { GlobalStyle, Routes } from 'components';
import { DarkTheme } from 'themes';
import Layout from 'Layouts';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <StrictMode>
      <GlobalStyle {...DarkTheme} />
      <ThemeProvider theme={DarkTheme}>
        <HelmetProvider>
          <Router>
            <Layout>
              <Routes />
            </Layout>
          </Router>
        </HelmetProvider>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
