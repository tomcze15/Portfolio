import { ImageTomasz } from 'assets';
import { Box, Button } from 'components';
import { CV_PATH, MEDIA, MY_NAME } from 'constants/items';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

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
    padding-left: 20px;
  }

  ${MEDIA.L} {
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
  height: 550px;
  min-width: 490px;
  animation: ${flyLeft} 2s;

  ${MEDIA.S} {
    height: 400px;
    min-width: 320px;
  }
`;

const Behind = styled.div`
  z-index: 2;
`;

const CircleRight = styled.div`
  height: 845px;
  width: 845px;
  border-radius: 1000px;
  background: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.circles.right};
  position: absolute;
  transform: translateY(-1080px) translateX(430px);
`;

const CircleLeft = styled.div`
  height: 980px;
  width: 980px;
  border-radius: 2000px;
  background: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.circles.left};
  position: absolute;
  transform: translateY(-1060px) translateX(-370px);
`;

const Home: FunctionComponent = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MainWrapper>
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
      {/* <Behind>
        <CircleRight />
        <CircleLeft />
      </Behind> */}
    </MainWrapper>
  );
};

export default Home;
