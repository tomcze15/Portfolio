import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ILayoutProps } from 'common/types';
import { Footer, Menu } from 'components';
import { MEDIA } from 'constants/items';

const LayoutWrapper = styled.main`
  height: 100%;
  min-height: 100vh;
  padding-top: 250px;
  display: flex;
  justify-content: center;

  ${MEDIA.L} {
    padding-top: 200px;
  }
`;

const Layout: FunctionComponent<ILayoutProps> = ({ children }): JSX.Element => (
  <>
    <Menu />
    <LayoutWrapper>{children}</LayoutWrapper>
    <Footer />
  </>
);

export default Layout;
