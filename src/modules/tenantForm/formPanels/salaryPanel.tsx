import React from 'react';

import { useWizard } from 'components/wizard/wizardSteps';
import { ETenantAction } from 'modules/tenantForm/tenantTypes';
import { useTenantContext } from 'modules/tenantForm/tenantContext';

import { FormWrapper, Title, ContentWrapper, OptionWrapper, RadioLabel } from './formPanels.styled';

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
  const { tenant, setTenant } = useTenantContext();
  const { setIsNextEnabled } = useWizard();

  const selectedOption = tenant && tenant.financialsInfo ? tenant.financialsInfo.salary : null;

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTenant({
      type: ETenantAction.UPDATE_SALARY_INFO,
      payload: {
        salary: e.target.value,
      },
    });
    setIsNextEnabled(true);
  };

  // If the tenant salary is selected, enable the next button (work around for the double previous test case)
  React.useEffect(() => {
    if (tenant.financialsInfo && tenant.financialsInfo.salary) setIsNextEnabled(true);
  }, []);

  return (
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
  );
};
