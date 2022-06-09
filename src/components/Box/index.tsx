import { IBoxProps } from 'common/types';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 50px;
  color: ${({ theme }) => theme.box.text};
  background-color: ${({ theme }) => theme.box.background};
`;

const Box: FunctionComponent<IBoxProps> = ({ children }): JSX.Element => {
  console.log(children);
  return <Wrapper>{children}</Wrapper>;
};

export default Box;
