import { ILayoutProps } from 'common/types';
import { Footer, Menu } from 'components';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.main`
  height: 100%;
  min-height: 100vh;
  padding-top: 250px;
  display: flex;
  justify-content: center;
`;

const Layout: FunctionComponent<ILayoutProps> = ({ children }): JSX.Element => (
  <>
    <Menu />
    <LayoutWrapper>{children}</LayoutWrapper>
    <Footer />
  </>
);

export default Layout;
