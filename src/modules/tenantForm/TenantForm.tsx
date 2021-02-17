/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
import React from 'react';

import { MainWrapper } from 'Layouts/DefaultLayout';
import { TenantContext } from './tenantContext';
import { WizardSteps } from 'components/wizard';
import { PersonalPanel, SalaryPanel, ReviewPanel } from './formPanels/index';

import { TenantActions, ITenant, ETenantAction } from './tenantTypes';

// Stepper information and step elements
export const stepperData = [
  {
    title: 'Personal',
    path: 'personal',
    element: () => <PersonalPanel />,
  },
  {
    title: 'Salary',
    path: 'salary',
    element: () => <SalaryPanel />,
  },
  {
    title: 'Review',
    path: 'review',
    element: () => <ReviewPanel />,
  },
];

// Handle the tenant registration state
export const tenantReducer = (state: ITenant, action: TenantActions) => {
  switch (action.type) {
    case ETenantAction.UPDATE_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: { ...action.payload },
      };
    case ETenantAction.UPDATE_SALARY_INFO:
      return {
        ...state,
        financialsInfo: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export const TenantForm: React.FC = () => {
  // Tenant Reducer
  const [tenant, setTenant] = React.useReducer(tenantReducer, {});

  // Memoize the context to prevent unecessary renders.
  const memoizedContextValue = React.useMemo(
    () => ({
      tenant,
      setTenant,
    }),
    [tenant],
  );

  return (
    <MainWrapper>
      <WizardSteps totalSteps={stepperData.length - 1}>
        {/* Progress Bar Stepper */}
        <WizardSteps.Stepper steps={stepperData.map((step) => step.title)} />

        <TenantContext.Provider value={memoizedContextValue}>
          {/* Wizard Form */}
          <WizardSteps.Form>
            {/* Wizard Panels */}
            {stepperData.map((step, idx) => (
              <WizardSteps.Panel stepIndex={idx} key={`${idx}-wizard-panels`}>
                <step.element />
              </WizardSteps.Panel>
            ))}
          </WizardSteps.Form>
        </TenantContext.Provider>
      </WizardSteps>
    </MainWrapper>
  );
};
