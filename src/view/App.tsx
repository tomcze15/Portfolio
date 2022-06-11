import { FunctionComponent, StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle, Routes } from 'components';
import { DarkTheme } from 'themes';
import Layout from 'Layouts';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <StrictMode>
      <GlobalStyle {...DarkTheme} />
      <ThemeProvider theme={DarkTheme}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
