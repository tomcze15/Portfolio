import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { ISideProps } from 'common/types';
import COLORS from 'constants/colors';
import { CONTACTS, MEDIA, ROUTES, SOCIALS } from 'constants/items';

const ItemCommonBehavoiur = css`
  color: ${({ theme }) => theme.footer.text.normal};
  display: flex;
  justify-content: inherit;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.footer.text.hover};
  }

  &.active {
    color: ${({ theme }) => theme.footer.text.selected};
  }
`;

const MainContainer = styled.footer`
  width: 100%;
  height: fit-content;
  background-color: ${COLORS.COLOR_2};
`;

const ContainerLinksContact = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 80px;

  ${MEDIA.M} {
    padding-top: 50px;
    flex-direction: column;
    gap: 70px;
  }
`;

const Side = styled.div<ISideProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ contectDirect = 'Left' }) =>
    contectDirect === 'Left' ? 'flex-start' : 'flex-end'};
  padding: ${({ contectDirect = 'Left' }) =>
    contectDirect === 'Left' ? '50px 0 0 30px' : '50px 30px 0 0'};

  ${MEDIA.M} {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

const Title = styled.h4`
  font-weight: bold;
  height: fit-content;
  font-size: 24px;
  padding-bottom: 35px;
  color: ${({ theme }) => theme.footer.title};
  display: flex;
  justify-content: inherit;

  ${MEDIA.M} {
    padding-bottom: 15px;
  }
`;

const ListContainer = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: inherit;
  gap: 15px;
  list-style-type: none;

  ${MEDIA.M} {
    align-items: center;
  }
`;

const ListItem = styled.li`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: inherit;
  align-items: center;
`;

const NavLinkWrapper = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  transition: 0.3s;
  ${ItemCommonBehavoiur}
`;

const ContainerSocilas = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialButton = styled.a`
  text-decoration: none;

  & svg {
    transition: 0.3s;
    height: 27px;
    width: 27px;
    fill: ${({ theme }) => theme.footer.icon.normal};

    &:hover {
      fill: ${({ theme }) => theme.footer.icon.hover};
      height: 30px;
      width: 30px;
    }
  }
`;

const ListContactItem = styled(ListItem)`
  width: fit-content;

  & img {
    transition: 0.3s;
    height: 23px;
    width: 23px;
    margin-right: 10px;
    transform: translateY(0px);
  }

  &:hover {
    transition: 0.3s;

    img {
      transform: translateY(-5px);
    }
  }

  & span {
    font-size: 18px;
    color: ${({ theme }) => theme.footer.text.normal};
  }
`;

const Footer: FunctionComponent = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <ContainerLinksContact>
        <Side contectDirect="Right">
          <Title>{t('LINKS')}</Title>
          <ListContainer>
            {ROUTES.map(({ title, href }) => (
              <ListItem key={title}>
                <NavLinkWrapper to={href}>{t(title)}</NavLinkWrapper>
              </ListItem>
            ))}
          </ListContainer>
        </Side>
        <Side contectDirect="Left">
          <Title>{t('CONTACT')}</Title>
          <ListContainer>
            {CONTACTS.map(({ icon, text }, index) => (
              <ListContactItem key={index}>
                <img src={icon} alt={t('CONTACT_DETAILS')} />
                <span>{text}</span>
              </ListContactItem>
            ))}
          </ListContainer>
        </Side>
      </ContainerLinksContact>
      <ContainerSocilas>
        {SOCIALS.map((social, index) => (
          <SocialButton key={index} href={social.href} target="_blank">
            <social.icon title={t('CONTACT_DETAILS')} />
          </SocialButton>
        ))}
      </ContainerSocilas>
    </MainContainer>
  );
};

export default Footer;
