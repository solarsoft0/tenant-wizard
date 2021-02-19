import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { MainWrapper } from 'Layouts/DefaultLayout';
import { BodyText, BaseHOne } from 'components/atoms';
import { BaseButton } from 'components/atoms';

import { ReactComponent as Logo } from 'assets/img/logo.svg';

/* === Styled Components === */
const LogoSVG = styled(Logo)`
  width: 100px;
  height: 100px;
  margin-bottom: 2rem;

  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
`;

const Wrapper = styled.div`
  @media (max-width: 37.5rem) {
    width: 90%;
    margin: auto;
  }

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

const SubHeader = styled(BodyText)`
  text-align: center;
  margin-bottom: 2rem;
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
        <LogoSVG />
        <BaseHOne>
          Unlock the doors of <TitleSpan>your new home</TitleSpan>
        </BaseHOne>
        <SubHeader>
          Tenant wizard is the simplest, safest, and most secure way to register tenants.
        </SubHeader>
        <BaseButton onClick={handleOnRegister}>Register Now!</BaseButton>
      </Wrapper>
    </MainWrapper>
  );
};
