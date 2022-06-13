import { Card } from 'components';
import { MEDIA, SKILLS } from 'constants/items';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  padding-bottom: 250px;
  display: flex;
  justify-content: center;

  ${MEDIA.L} {
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 100px;
  }
`;

const GridSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  width: fit-content;

  ${MEDIA.XXL} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${MEDIA.XL} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${MEDIA.M} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Accomplishment: FunctionComponent = (): JSX.Element => {
  return (
    <MainWrapper>
      <GridSkills>
        {SKILLS.map((skill) => (
          <Card key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </GridSkills>
    </MainWrapper>
  );
};

export default Accomplishment;
