import React from 'react';
import styled from 'styled-components';
import { BaseHThree } from 'components/atoms';

export const ReviewPanel: React.FC = () => {
  return (
    <div>
      <Title> Review Inputs </Title>
      <div>Hello this is from the review panel</div>
    </div>
  );
};

const Title = styled(BaseHThree)`
  text-align: start;
`;
