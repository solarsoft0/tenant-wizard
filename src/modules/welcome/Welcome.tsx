import React from 'react';
import styled from 'styled-components';

import { BodyText, HeaderOne } from 'components/atoms/typography';
import { PrimaryButton } from 'components/atoms/buttons';
import { useHistory } from 'react-router-dom';

/* === Styled Components === */
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.lightGray};
  display: block;
  font-style: inherit;
`;

export const WelcomePage: React.FC = () => {
  const history = useHistory();

  const handleOnRegister = () => {
    history.push('personal');
  };

  return (
    <Wrapper>
      <HeaderOne>
        Unlock the doors of <TitleSpan>your new home</TitleSpan>
      </HeaderOne>
      <BodyText>
        Home is the simplest, safest, and most profitable way to rent out your apartments.
      </BodyText>
      <PrimaryButton onClick={handleOnRegister}>Register Now!</PrimaryButton>
    </Wrapper>
  );
};
