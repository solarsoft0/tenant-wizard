import React from 'react';

import { Input } from 'components/atoms';
import { useWizard } from 'components/wizard/wizardSteps';
import { ETenantAction, TenantPersonalInfo } from 'modules/tenantForm/tenantTypes';
import { useTenantContext } from 'modules/tenantForm/tenantContext';

import { FormWrapper, Title } from './formPanels.styled';

type InputDataType = {
  id: string;
  label: string;
  type: string;
};

// Inputs data mapper
const inputFormData: { [key: string]: InputDataType } = {
  fullName: {
    id: 'tenant-full-name',
    label: 'Full name',
    type: 'text',
  },
  email: {
    id: 'tenant-email',
    label: 'Email',
    type: 'email',
  },
  phoneNumber: {
    id: 'tenant-phone-number',
    label: 'Phone Number',
    type: 'tel',
  },
};

// Personal information form reducer
const formReducer = (
  prevState: { [key: string]: string },
  { value, key }: { value: string; key: string },
) => {
  return { ...prevState, [key]: value };
};

// Build the initial State according to the tenant Context
const _initialStateBuilder = (personalInfo: TenantPersonalInfo | undefined): TenantPersonalInfo => {
  return personalInfo
    ? personalInfo
    : {
        fullName: '',
        email: '',
        phoneNumber: '',
      };
};

export const PersonalPanel: React.FC = () => {
  const { tenant, setTenant } = useTenantContext();
  const { setIsNextEnabled } = useWizard();

  const initialFormState = _initialStateBuilder(tenant.personalInfo);
  // Personal form state
  const [personalInfo, setPersonalInfo] = React.useReducer(formReducer, initialFormState);

  const onBlur = (key: string) => {
    console.log('validdate', personalInfo[key]);

    // If all the inputs are filled
    const isDone = Object.keys(personalInfo).every((key) => personalInfo[key] !== '');
    if (isDone) {
      setIsNextEnabled(true);

      // Set personal information in tenant context
      setTenant({
        type: ETenantAction.UPDATE_PERSONAL_INFO,
        payload: {
          fullName: personalInfo.fullName,
          email: personalInfo.email,
          phoneNumber: personalInfo.phoneNumber,
        },
      });
    }
  };

  return (
    <FormWrapper>
      <Title> Personal Panel</Title>
      <div style={{ width: '100%' }}>
        {Object.keys(personalInfo).map((key, idx) => (
          <Input
            key={`${idx}-personal-input`}
            type={inputFormData[key].type}
            label={inputFormData[key].label}
            value={personalInfo[key]}
            onBlur={() => onBlur(key)}
            onChange={(value) => setPersonalInfo({ value, key })}
          />
        ))}
      </div>
    </FormWrapper>
  );
};
