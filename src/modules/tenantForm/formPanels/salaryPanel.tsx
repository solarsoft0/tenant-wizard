import React from 'react';
import styled from 'styled-components';
import { BaseHThree } from 'components/atoms';

export const SalaryPanel: React.FC = () => {
  return (
    <div>
      <Title> Salary Income </Title>
      <div>Hello this is from the salary panel</div>
    </div>
  );
};

const Title = styled(BaseHThree)`
  text-align: start;
`;
