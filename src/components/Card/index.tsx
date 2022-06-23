import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

import { ICardPorps } from 'common/types';
import { MEDIA } from 'constants/items';

const flexCenter = css`
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  height: 335px;
  width: 300px;
  border-radius: 13px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;

  ${MEDIA.XXL} {
    height: 270px;
    width: 260px;
  }

  &:hover {
    transform: scale(1.1, 1.1);
    -webkit-box-shadow: 0px 0px 21px 7px ${({ theme }) => theme.card.shadow};
    -moz-box-shadow: 0px 0px 21px 7px ${({ theme }) => theme.card.shadow};
    box-shadow: 0px 0px 21px 7px ${({ theme }) => theme.card.shadow};
  }
`;

const IconWrapper = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  ${flexCenter}
  background-color: ${({ theme }) => theme.card.top.background};

  img,
  svg {
    max-height: 160px;
    max-width: 280px;

    ${MEDIA.XXL} {
      max-height: 120px;
      max-width: 210px;
    }
  }
`;

const TitleWrapper = styled.div`
  height: 35%;
  width: 100%;
  background-color: ${({ theme }) => theme.card.bottom.background};
  display: flex;
  ${flexCenter}

  & h5 {
    transition: 0.5s;
    font-size: 32px;
    color: ${({ theme }) => theme.card.bottom.text};

    ${MEDIA.XXL} {
      font-size: 28px;
    }
  }

  ${CardContainer}:hover & h5 {
    font-size: 37px;
  }
`;

const Card: FunctionComponent<ICardPorps> = (props): JSX.Element => {
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

export default Card;
