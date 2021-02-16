import * as React from 'react';

import { useWizard } from './wizardSteps';
import { ProgressBarWrapper, ProgressBarButton } from './wizard.styled';

export interface IStepperProps {
  steps: string[];
}

export const Stepper: React.FC<IStepperProps> = ({ steps }) => {
  const { activeTab } = useWizard();

  return (
    <ProgressBarWrapper>
      {steps.map((step, i) => (
        <ProgressBarButton
          type="button"
          title={step}
          key={`${i}-step-title`}
          isActive={activeTab >= i}
        >
          {step}
        </ProgressBarButton>
      ))}
    </ProgressBarWrapper>
  );
};
