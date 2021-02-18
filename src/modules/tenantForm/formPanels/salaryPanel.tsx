import React from 'react';

import { useWizard } from 'components/wizard/wizardSteps';
import { ETenantAction } from 'modules/tenantForm/tenantTypes';
import { useTenantContext } from 'modules/tenantForm/tenantContext';

import { FormWrapper, Title, ContentWrapper, OptionWrapper, RadioLabel } from './formPanels.styled';

// Define radio button options
const radioOptions = [
  {
    label: '0 - 1000',
    value: '0-1000',
  },
  {
    label: '1000 - 2000',
    value: '1000-2000',
  },
  {
    label: '2000 - 3000',
    value: '2000-3000',
  },
  {
    label: '3000+',
    value: '3000+',
  },
];

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
        <Title> Salary Indication </Title>
        <ContentWrapper>
          {radioOptions.map((option, idx) => (
            <OptionWrapper key={`${idx}-radio-buttons`} isChecked={selectedOption === option.value}>
              <input
                id={option.value}
                type="radio"
                value={option.value}
                name="salary"
                onChange={onChangeValue}
                style={{ display: 'none' }}
              />
              <RadioLabel htmlFor={option.value}>{option.label}</RadioLabel>
            </OptionWrapper>
          ))}
        </ContentWrapper>
      </FormWrapper>
      {/* Render previous/next buttons */}
      {actionButtons(validateAndSubmit)}
    </>
  );
};
