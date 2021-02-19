/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { MainWrapper } from 'Layouts/DefaultLayout';
import { WizardSteps } from 'components/wizard';
import { PersonalPanel, SalaryPanel, ReviewPanel } from './formPanels/index';

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

const TenantFormWrapper = styled(MainWrapper)`
  justify-content: flex-start;
  margin: 5rem auto 2rem;
`;

export const TenantForm: React.FC = () => {
  const history = useHistory();

  const onFormSubmit = () => {
    // send the timestamp (protected route)
    history.push(`success`);
  };

  return (
    <TenantFormWrapper>
      <WizardSteps totalSteps={stepperData.length - 1} onWizardSubmit={onFormSubmit}>
        {/* Progress Bar Stepper */}
        <WizardSteps.Stepper steps={stepperData.map((step) => step.title)} />

        {/* Wizard Form */}
        <WizardSteps.Form>
          {/* Wizard Panels */}
          {stepperData.map((step, idx) => (
            <WizardSteps.Panel stepIndex={idx} key={`${idx}-wizard-panels`}>
              <step.element />
            </WizardSteps.Panel>
          ))}
        </WizardSteps.Form>
      </WizardSteps>
    </TenantFormWrapper>
  );
};
