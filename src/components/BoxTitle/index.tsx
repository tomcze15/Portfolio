import { FunctionComponent } from 'react';
import styled from 'styled-components';

import { IBoxTitleProps } from 'common/types';
import { MEDIA } from 'constants/items';

const Wrapper = styled.div`
  height: fit-content;
  width: fit-content;
  background-color: #9a8c98;
  border-radius: 13px;
  overflow: hidden;
  gap: 30px;

  ${MEDIA.XXL} {
    max-width: 1200px;
  }

  ${MEDIA.XL} {
    max-width: 1000px;
  }
`;

const Title = styled.h3`
  width: 100%;
  height: 150px;
  font-size: 38px;
  color: #f2e9e4;
  background-color: #4a4e69;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 30px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  * {
    color: #22223b;
  }
`;

const BoxTitle: FunctionComponent<IBoxTitleProps> = ({
  title,
  children,
}): JSX.Element => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default BoxTitle;
