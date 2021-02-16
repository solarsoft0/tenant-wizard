/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/display-name */
import React from 'react';

import { MainWrapper } from 'Layouts/DefaultLayout';
import { WizardSteps } from 'components/wizard';
import { PersonalPanel } from './formPanels/personalPanel';
import { SalaryPanel } from './formPanels/salaryPanel';
import { ReviewPanel } from './formPanels/reviewPanel';

export const stepperData = [
  {
    title: 'Personal',
    element: () => <PersonalPanel />,
  },
  {
    title: 'Salary',
    element: () => <SalaryPanel />,
  },
  {
    title: 'Review',
    element: () => <ReviewPanel />,
  },
];

export const TenantForm: React.FC = () => {
  return (
    <MainWrapper>
      <WizardSteps totalSteps={stepperData.length - 1}>
        {/* Progress Bar Stepper */}
        <WizardSteps.Stepper steps={stepperData.map((step) => step.title)} />

        {/* Wizard Panels */}
        {stepperData.map((step, idx) => {
          return (
            <WizardSteps.Panel stepIndex={idx} key={`${idx}-panel`}>
              <step.element />
            </WizardSteps.Panel>
          );
        })}
      </WizardSteps>
    </MainWrapper>
  );
};
