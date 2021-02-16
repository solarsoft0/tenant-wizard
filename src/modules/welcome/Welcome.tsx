import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { MainWrapper } from 'Layouts/DefaultLayout';
import { BodyText, BaseHOne } from 'components/atoms';
import { BaseButton } from 'components/atoms';

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
/* === END - Styled Components === */

export const WelcomePage: React.FC = () => {
  const history = useHistory();

  const handleOnRegister = () => {
    history.push('form');
  };

  return (
    <MainWrapper>
      <Wrapper>
        <BaseHOne>
          Unlock the doors of <TitleSpan>your new home</TitleSpan>
        </BaseHOne>
        <BodyText>
          Tenant wizard is the simplest, safest, and most secure way to register tenants.
        </BodyText>
        <BaseButton onClick={handleOnRegister}>Register Now!</BaseButton>
      </Wrapper>
    </MainWrapper>
  );
};
