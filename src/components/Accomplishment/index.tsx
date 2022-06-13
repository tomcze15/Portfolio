import { Card } from 'components/Card';
import { SKILLS } from 'constants/items';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  height: 100%;
  width: 100%;
  max-width: 1400px;
  padding-bottom: 250px;
  display: flex;
  justify-content: center;
`;

const GridSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  width: fit-content;
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
