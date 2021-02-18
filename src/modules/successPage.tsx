import React from 'react';
import styled from 'styled-components';

import { MainWrapper } from 'Layouts/DefaultLayout';
import { BodyText, BaseHOne } from 'components/atoms';

/* === Styled Components === */
// TODO: Move to the module global style file (/modules)
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
  font-style: inherit;
`;

const RedirectLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;
/* === END - Styled Components === */

// Home.ht official listing link
const REDIRECT_URL = 'https://www.home.ht/homes/listings/map';

export const SuccessPage: React.FC = () => {
  // Redirect the user to home.ht after 3s
  React.useEffect(() => {
    setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, 3000);
  });

  // Render success message
  return (
    <MainWrapper>
      <Wrapper>
        <BaseHOne>
          <TitleSpan>Welcome </TitleSpan>Tenant 🎉
        </BaseHOne>
        <BodyText>Once again, welcome to the tenant wizard family.</BodyText>
        <BodyText>
          You will be redirected shortly, if nothing happened, click{' '}
          <RedirectLink href={REDIRECT_URL}>HERE</RedirectLink>
        </BodyText>
      </Wrapper>
    </MainWrapper>
  );
};

export default SuccessPage;
