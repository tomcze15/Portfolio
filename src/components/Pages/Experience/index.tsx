import {
  ImageCarNavi,
  IconCar,
  ImageClock,
  ImageEarth,
  ImageList,
  ImageScreen,
} from 'assets';
import { SVGType } from 'common/types';
import { Box } from 'components';
import { TECHNOLOGIES } from 'constants/items';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 21px;
  gap: 200px;
  max-width: 1400px;
  padding-bottom: 250px;
`;

const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  & img {
    height: 231px;
  }

  & svg {
    height: 285px;
    width: 400px;
  }
`;

const Description = styled.p`
  text-align: justify;
`;

const InfoImageContainer = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;

  & img {
    height: 200px;
    width: 200px;
  }

  & ul {
    padding-left: 35px;
  }
`;

const SmallInfoImageContainer = styled(InfoImageContainer)`
  & img {
    height: 100px;
    width: 100px;
  }
  gap: 30px;
`;

const TasksContainer = styled.div`
  width: 470px;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TechContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  padding-top: 100px;

  & span {
    text-align: center;
    width: 100%;
  }
`;

const TechsSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 120px;
`;

const LogosContainer = styled.div`
  display: flex;
  gap: 30px;

  & img,
  & svg {
    height: 100px;
  }
`;

const animHover = css`
  transition: 0.3s;
  transform: translateY(0px);

  &:hover {
    transform: translateY(-15px);
  }
`;

const ImgWrapper = styled.img`
  ${animHover}
`;

const SVGWrapper = styled.div`
  height: fit-content;
  width: fit-content;
  ${animHover}
`;

const Experience: FunctionComponent = (): JSX.Element => {
  const { t } = useTranslation();
  const TasksProject2: string[] = t('PROJECTS.SECOND.LIST.ITEMS', {
    returnObjects: true,
  });
  const TasksProject1: string[] = t('PROJECTS.FIRST.LIST.ITEMS', {
    returnObjects: true,
  });

  return (
    <MainWrapper>
      <Box>
        <Description>{t('PROJECTS.SECOND.DESCRIPTION')}</Description>
        <ImagesContainer>
          <img src={ImageScreen} alt="screen" />
          <IconCar />
        </ImagesContainer>
        <InfoImageContainer>
          <TasksContainer>
            <span>{t('PROJECTS.SECOND.LIST.DESCRIPTION')}</span>
            <ListContainer>
              {TasksProject2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ListContainer>
          </TasksContainer>
          <img src={ImageList} alt="test" />
        </InfoImageContainer>
        <SmallInfoImageContainer>
          <img src={ImageClock} alt="test" />
          <span>8 {t('PROJECTS.SECOND.PERIOD')}</span>
        </SmallInfoImageContainer>
      </Box>
      <Box>
        <Description>{t('PROJECTS.FIRST.DESCRIPTION')}</Description>
        <ImagesContainer>
          <img src={ImageEarth} />
          <ImageCarNavi />
        </ImagesContainer>
        <InfoImageContainer>
          <TasksContainer>
            <span>{t('PROJECTS.FIRST.LIST.DESCRIPTION')}</span>
            <ListContainer>
              {TasksProject1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ListContainer>
          </TasksContainer>
          <img src={ImageList} alt="test" />
        </InfoImageContainer>
        <TechContainer>
          <span>{t('PROJECTS.FIRST.TECHNOLOGIES')}</span>
          {TECHNOLOGIES.map((row) => (
            <TechsSection>
              {row.map((LogosGroup) => (
                <LogosContainer>
                  {LogosGroup.map((Logo: string | SVGType, index) =>
                    typeof Logo === 'string' ? (
                      <ImgWrapper key={index} src={Logo} alt="tech icon" />
                    ) : (
                      <SVGWrapper>
                        <Logo key={index} />
                      </SVGWrapper>
                    )
                  )}
                </LogosContainer>
              ))}
            </TechsSection>
          ))}
        </TechContainer>
        <SmallInfoImageContainer>
          <img src={ImageClock} alt="test" />
          <span>3 {t('PROJECTS.FIRST.PERIOD')}</span>
        </SmallInfoImageContainer>
      </Box>
    </MainWrapper>
  );
};

export default Experience;