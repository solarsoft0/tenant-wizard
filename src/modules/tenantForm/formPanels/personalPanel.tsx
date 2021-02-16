import React from 'react';
import styled from 'styled-components';
import { BaseHThree } from 'components/atoms';

export const PersonalPanel: React.FC = () => {
  return (
    <div>
      <Title> Personal Panel</Title>
      <div>Hello this is from the personal panel</div>
    </div>
  );
};

const Title = styled(BaseHThree)`
  text-align: start;
`;
