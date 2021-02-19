import React from 'react';

import { useWizard } from 'components/wizard/wizardSteps';
import { ETenantAction } from 'modules/tenantForm/tenantTypes';
import { useTenantContext } from 'modules/tenantForm/tenantContext';

import { FormWrapper, Title, ContentWrapper, OptionWrapper, RadioLabel } from './formPanels.styled';

// Define radio button mapper
export const salaryOtions: { [key: string]: string } = {
  '0-1000': '€0 - €1000',
  '1000-2000': '€1000 - €2000',
  '2000-3000': '€2000 - €3000',
  '3000-plus': '€3000+',
};

export const SalaryPanel: React.FC = () => {
  // fetch from context
  const { tenant, setTenant } = useTenantContext();
  const { actionButtons } = useWizard();

  // check for selected option
  const selectedOption = tenant && tenant.financialsInfo ? tenant.financialsInfo.salary : null;

  // handles on value selection
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTenant({
      type: ETenantAction.UPDATE_SALARY_INFO,
      payload: {
        salary: e.target.value,
      },
    });
  };

  // validate required input
  const validateAndSubmit = () => {
    return Boolean(tenant && tenant.financialsInfo && tenant.financialsInfo.salary);
  };

  // render salary radio buttons
  return (
    <>
      <FormWrapper>
        <Title> Salary Indication</Title>
        <ContentWrapper>
          {Object.keys(salaryOtions).map((key, idx) => (
            <OptionWrapper key={`${idx}-radio-buttons`} isChecked={selectedOption === key}>
              <input
                id={key}
                type="radio"
                value={key}
                name="salary"
                onChange={onChangeValue}
                style={{ display: 'none' }}
              />
              <RadioLabel htmlFor={key}>{salaryOtions[key]}</RadioLabel>
            </OptionWrapper>
          ))}
        </ContentWrapper>
      </FormWrapper>
      {/* Render previous/next buttons */}
      {actionButtons(validateAndSubmit)}
    </>
  );
};
