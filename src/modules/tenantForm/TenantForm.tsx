/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { MainWrapper } from 'Layouts/DefaultLayout';
import { WizardSteps } from 'components/wizard';
import { PersonalPanel, SalaryPanel, ReviewPanel } from './formPanels/index';
import { LoadingPanel } from '../../components/atoms/loadingPanel';

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

/**
 * @description Used for development puropses ONLY!
 * @params time - timeout time in s
 *
 * @example simulateApi(300)
 */
export function simulateApi(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export const TenantForm: React.FC = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);

  const onFormSubmit = () => {
    // Start the loader
    setIsLoading(true);

    // Simulate an API call for sending the tenant info
    simulateApi(2000)
      .then(() => {
        // Route user on success
        history.push(`success`);
      })
      .catch((error) => {
        // Render Toast for error
        console.log(error);
      })
      .finally(() => {
        // stop the loader
        setIsLoading(false);
      });
  };

  if (isLoading) return <LoadingPanel />;

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
