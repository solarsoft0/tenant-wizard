import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { MainWrapper } from 'Layouts/DefaultLayout';
import { BodyText, BaseHOne } from 'components/atoms';
import { TenantContext } from './tenantForm/tenantContext';

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

const SubHeader = styled(BodyText)`
  text-align: center;
`;
/* === END - Styled Components === */

// Home.ht official listing link
const REDIRECT_URL = 'https://www.home.ht/homes/listings/map';

export const SuccessPage: React.FC = () => {
  // fetch registered tenant
  const context = React.useContext(TenantContext);
  const tenant = context && context.tenant;

  // Redirect the user to home.ht after 3s
  if (process.env.NODE_ENV !== 'development')
    React.useEffect(() => {
      setTimeout(() => {
        window.location.href = REDIRECT_URL;
      }, 3000);
    });

  // no tenant, redirect the user to the welcome page
  const shouldRedirect = !tenant || !tenant.personalInfo || !tenant.financialsInfo;

  // Render success message
  return (
    <>
      {shouldRedirect ? <Redirect to="/" /> : null}
      <MainWrapper>
        <Wrapper>
          <BaseHOne>
            <TitleSpan>Welcome </TitleSpan>Tenant 🎉
          </BaseHOne>
          <SubHeader>Once again, welcome to the tenant wizard family.</SubHeader>
          <SubHeader>
            You will be redirected shortly, if nothing happened, click{' '}
            <RedirectLink href={REDIRECT_URL}>HERE</RedirectLink>
          </SubHeader>
        </Wrapper>
      </MainWrapper>
    </>
  );
};

export default SuccessPage;
