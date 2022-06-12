import { ICardPorps } from 'common/types';
import COLORS from 'constants/colors';
import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

const flexCenter = css`
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  height: 335px;
  width: 300px;
  border-radius: 13px;
  overflow: hidden;
`;

const IconWrapper = styled.div`
  height: 215px;
  width: 100%;
  display: flex;
  ${flexCenter}
  background-color: ${COLORS.COLOR_5};

  img,
  svg {
    max-height: 160px;
    max-width: 280px;
  }
`;

const TitleWrapper = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  ${flexCenter}
  background-color: ${COLORS.COLOR_2};

  & h5 {
    font-size: 32px;
    color: ${COLORS.COLOR_4};
  }
`;

export const Card: FunctionComponent<ICardPorps> = (props): JSX.Element => {
  const typeOfIcon = typeof props.icon;

  return (
    <CardContainer>
      <IconWrapper>
        {typeOfIcon === 'object' ? (
          <props.icon />
        ) : (
          <img src={props.icon as string} />
        )}
      </IconWrapper>
      <TitleWrapper>
        <h5>{props.name}</h5>
      </TitleWrapper>
    </CardContainer>
  );
};
