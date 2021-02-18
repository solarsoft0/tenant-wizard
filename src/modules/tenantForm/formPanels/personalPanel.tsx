import React from 'react';

import { useFormValidation } from 'hooks/useFormValidation';
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
export const inputFormData: { [key: string]: InputDataType } = {
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
  // fetch from context
  const { tenant, setTenant } = useTenantContext();
  const { actionButtons } = useWizard();
  const { validationErrors, validateForm, validateField } = useFormValidation('personal');

  // Define personal form state
  const initialFormState = _initialStateBuilder(tenant.personalInfo);
  const [personalInfo, setPersonalInfo] = React.useReducer(formReducer, initialFormState);

  const isFormReady = () =>
    Object.keys(validationErrors).every((key) => {
      return validationErrors[key] === undefined;
    });

  const validateAndSubmit = () => {
    // Validate all entries
    validateForm(personalInfo);

    const isDone = Object.keys(personalInfo).every((key) => personalInfo[key] !== '');

    // check for errors and missing inputs
    if (!isDone || !isFormReady()) return false;

    // Set personal information in tenant context
    setTenant({
      type: ETenantAction.UPDATE_PERSONAL_INFO,
      payload: {
        fullName: personalInfo.fullName,
        email: personalInfo.email,
        phoneNumber: personalInfo.phoneNumber,
      },
    });

    return true;
  };

  const onBlur = (key: string) => {
    // validate single entry
    validateField(key, personalInfo[key]);

    const isDone = Object.keys(personalInfo).every((key) => personalInfo[key] !== '');

    // submit inputs if none is empty
    if (isDone) validateAndSubmit();
  };

  return (
    <>
      <FormWrapper>
        <Title> Personal Panel</Title>
        <div style={{ width: '100%' }}>
          {Object.keys(personalInfo).map((key, idx) => {
            return (
              <Input
                key={`${idx}-personal-input`}
                type={inputFormData[key].type}
                label={inputFormData[key].label}
                value={personalInfo[key]}
                onBlur={() => onBlur(key)}
                errorMessage={validationErrors && validationErrors[key]}
                onChange={(value) => setPersonalInfo({ value, key })}
              />
            );
          })}
        </div>
      </FormWrapper>

      {/* Render previous/next buttons */}
      {actionButtons(validateAndSubmit)}
    </>
  );
};
