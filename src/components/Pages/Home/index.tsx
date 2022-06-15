import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

import { ImageTomasz } from 'assets';
import { Box, Button, PageTitle } from 'components';
import { CV_PATH, MEDIA, MY_NAME } from 'constants/items';

const flyRight = keyframes`
  0% {
    transform: translateX(-999999px);
  }

  40% {
    transform: translateX(-260px);
  }

  70% {
    transform: translateX(260px);
  }

  90% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0px);
  }
`;

const flyLeft = keyframes`
  0% {
    transform: translateX(70px);
  }

  100% {
    transform: translateX(0px);
  }
`;

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  padding-bottom: 300px;

  ${MEDIA.L} {
    padding-bottom: 200px;
  }

  ${MEDIA.M} {
    padding-bottom: 100px;
  }
`;

const Front = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 3;
`;

const ParagraphWrapper = styled.p`
  text-align: justify;
  text-justify: inter-word;
  font-size: 21px;
`;

const TomaszContainer = styled.div`
  height: 550px;
  width: 100%;
  display: flex;
  gap: 220px;

  ${MEDIA.XXL} {
    padding-left: 70px;
    gap: 110px;
  }

  ${MEDIA.L} {
    gap: 10px;
    padding-left: 0;
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
`;

const HelloContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 48px;
  padding-bottom: 200px;
  animation: ${flyRight} 2s;

  & p:first-of-type {
    color: ${({ theme }) => theme.hello};
  }

  & p:last-of-type {
    font-weight: bold;
    font-size: 64px;
    padding-bottom: 10px;

    ${MEDIA.XL} {
      font-size: 60px;
    }

    ${MEDIA.L} {
      font-size: 52px;
    }

    ${MEDIA.S} {
      text-align: center;
    }
  }

  ${MEDIA.XL} {
    font-size: 42px;
  }

  ${MEDIA.L} {
    font-size: 36px;
    padding-bottom: 50px;
    align-items: center;
  }
`;

const PhotoContainer = styled.img`
  max-height: 550px;
  animation: ${flyLeft} 2s;

  ${MEDIA.S} {
    max-height: 400px;
  }
`;

const Behind = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  overflow: hidden;

  ${MEDIA.XL} {
    height: 1500px;
  }
`;

const CircleRight = styled.div`
  height: 845px;
  width: 845px;
  border-radius: 1000px;
  background: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.circles.right};
  position: absolute;
  transform: translateY(180px) translateX(180px);

  ${MEDIA.L} {
    transform: translateY(410px) translateX(180px);
  }
`;

const CircleLeft = styled.div`
  height: 980px;
  width: 980px;
  border-radius: 2000px;
  background: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.circles.left};
  position: absolute;
  transform: translateY(210px) translateX(-540px);

  ${MEDIA.XL} {
    transform: translateY(210px) translateX(-340px) rotate(180deg);
  }

  ${MEDIA.L} {
    transform: translateY(310px) translateX(-340px) rotate(180deg);
  }
`;

const Home: FunctionComponent = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MainWrapper>
      <PageTitle title={t('HOME')} />
      <Front>
        <TomaszContainer>
          <HelloContainer>
            <p>{t('HELLO')}</p>
            <p>{MY_NAME}</p>
            <Button pathToDownload={CV_PATH}>{t('BUTTON.LONG')}</Button>
          </HelloContainer>
          <PhotoContainer src={ImageTomasz} />
        </TomaszContainer>
        <Box>
          <ParagraphWrapper>{t('ABOUT_ME.P1')}</ParagraphWrapper>
          <ParagraphWrapper>{t('ABOUT_ME.P2')}</ParagraphWrapper>
          <ParagraphWrapper>{t('ABOUT_ME.P3')}</ParagraphWrapper>
        </Box>
      </Front>
      <Behind>
        <CircleLeft />
        <CircleRight />
      </Behind>
    </MainWrapper>
  );
};

export default Home;
