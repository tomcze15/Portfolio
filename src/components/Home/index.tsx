import { ImageTomasz } from 'assets';
import Box from 'components/Box';
import Button from 'components/Button';
import { CV_PATH, MY_NAME } from 'constants/items';
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

const MainWrapper = styled.main`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  padding-bottom: 300px;
`;

const ParagraphWrapper = styled.p`
  text-align: justify;
  text-justify: inter-word;
  font-size: 21px;
  color: ${({ theme }) => theme.text};
`;

const TomaszContainer = styled.div`
  height: 550px;
  width: 100%;
  display: flex;
  gap: 200px;
`;

const HelloContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 48px;
  animation: ${flyRight} 2s;
  & p:last-of-type {
    color: ${({ theme }) => theme.hello};
    font-weight: bold;
    font-size: 64px;
    padding-bottom: 10px;
  }
  padding-bottom: 200px;
`;

const PhotoContainer = styled.img`
  height: 550px;
  width: 490px;
  animation: ${flyLeft} 2s;
`;

const Home: FunctionComponent = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MainWrapper>
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
    </MainWrapper>
  );
};

export default Home;
