import { IBoxProps } from 'common/types';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 50px;
  color: ${({ theme }) => theme.box.text};
  background-color: ${({ theme }) => theme.box.background};
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 22;
`;

const Box: FunctionComponent<IBoxProps> = ({ children }): JSX.Element => {
  return <Wrapper>{children}</Wrapper>;
};

export default Box;
