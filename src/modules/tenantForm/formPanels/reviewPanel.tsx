import React from 'react';
import styled from 'styled-components';

import { FormWrapper, Title } from './formPanels.styled';
import { useTenantContext } from '../tenantContext';

const ContentWrapper = styled.div`
  width: 100%;

  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export const ReviewPanel: React.FC = () => {
  const { tenant } = useTenantContext();

  return (
    <FormWrapper>
      <Title> Review Inputs </Title>
      {/* TODO: Change the Layout */}
      <ContentWrapper>
        <div>Full Name: {tenant.personalInfo && tenant.personalInfo.fullName}</div>
        <div>Email: {tenant.personalInfo && tenant.personalInfo.email}</div>
        <div>Phone Number: {tenant.personalInfo && tenant.personalInfo.phoneNumber}</div>
        <div>Salary Income: {tenant.financialsInfo && tenant.financialsInfo.salary}</div>
      </ContentWrapper>
    </FormWrapper>
  );
};
