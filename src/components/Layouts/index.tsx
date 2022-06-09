import { ILayoutProps } from 'common/types';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.main`
  height: 100%;
  width: 100%;
`;

const Layout: FunctionComponent<ILayoutProps> = ({ children }): JSX.Element => (
  <LayoutWrapper>{children}</LayoutWrapper>
);

export default Layout;
