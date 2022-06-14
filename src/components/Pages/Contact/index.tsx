import { Box } from 'components';
import { CONTACTS, MEDIA } from 'constants/items';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 44px;
  gap: 100px;
  max-width: 1400px;
  padding-bottom: 750px;

  ${MEDIA.XL} {
    font-size: 36px;
    padding-bottom: 550px;
    gap: 70px;
  }

  ${MEDIA.M} {
    font-size: 23px;
    padding-bottom: 500px;
    gap: 50px;
  }

  ${MEDIA.S} {
    font-size: 18px;
    padding-bottom: 500px;
    gap: 50px;
  }
`;

const ContactContainer = styled.div`
  transition: 0.5s;
  display: flex;
  align-items: center;
  gap: 50px;

  & span {
    color: ${({ theme }) => theme.contact.text};
  }

  & img {
    transition: 0.5s;
    height: 80px;
    width: 80px;

    ${MEDIA.XL} {
      height: 50px;
      width: 50px;
    }

    ${MEDIA.M} {
      height: 30px;
      width: 30px;
    }
  }

  &:hover {
    @media (min-width: 993px) {
      transition: 0.5s;
      gap: 40px;
      font-size: 66px;

      ${MEDIA.XL} {
        font-size: 36px;
      }

      & img {
        height: 100px;
        width: 100px;

        ${MEDIA.XL} {
          height: 80px;
          width: 80px;
        }
      }
    }
  }

  ${MEDIA.XL} {
    flex-direction: column;
  }

  ${MEDIA.L} {
    flex-direction: column;
    gap: 20px;
  }
`;

const Contact: FunctionComponent = (): JSX.Element => {
  return (
    <MainWrapper>
      {CONTACTS.map(({ icon, text }) => (
        <Box>
          <ContactContainer>
            <img src={icon} />
            <span>{text}</span>
          </ContactContainer>
        </Box>
      ))}
    </MainWrapper>
  );
};

export default Contact;
