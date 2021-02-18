import React from 'react';
import styled from 'styled-components';

import { Input, BodyText } from 'components/atoms';
import { useWizard } from 'components/wizard';
import { useTenantContext } from '../tenantContext';
import { inputFormData } from './personalPanel';
import { FormWrapper, Title, OptionWrapper, RadioLabel } from './formPanels.styled';

const ContentWrapper = styled.div`
  width: 100%;

  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export const ReviewPanel: React.FC = () => {
  // fetch from context
  const { tenant } = useTenantContext();
  const { actionButtons } = useWizard();

  // Render readOnly inputs for review
  return (
    <>
      <FormWrapper>
        <Title> Review Inputs </Title>
        <ContentWrapper>
          <BodyText>
            Please review your information carefully, you will be able to modify them later on...
          </BodyText>
          {/* Render tenant personal information */}
          {tenant.personalInfo &&
            Object.keys(inputFormData).map((key: string, idx: number) => (
              <Input
                key={`${idx}-input-review`}
                type={inputFormData[key].type}
                label={inputFormData[key].label}
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onChange={() => {}}
                value={(tenant.personalInfo && tenant.personalInfo[key]) || ''}
                readOnly
              />
            ))}

          {/* Render tenant fincancials information */}
          {tenant.financialsInfo && (
            <OptionWrapper isChecked={true} style={{ maxWidth: '400px', margin: '0.5rem auto' }}>
              <input
                id={'salary-review'}
                type="radio"
                value={tenant.financialsInfo.salary}
                name="salary"
                style={{ display: 'none' }}
                readOnly
              />
              <RadioLabel htmlFor="salary-review">{tenant.financialsInfo.salary}</RadioLabel>
            </OptionWrapper>
          )}
        </ContentWrapper>
      </FormWrapper>
      {/* Render previous/submit buttons (no validation on this panel) */}
      {actionButtons()}
    </>
  );
};
