import * as React from 'react';

import { useWizard } from './wizardSteps';

export interface IStepProps {
  stepIndex: number;
}

export const Step: React.FC<IStepProps> = (props) => {
  const { setActiveTab } = useWizard();

  return (
    <div>
      <button onClick={() => setActiveTab(props.stepIndex)}>{props.children}</button>
    </div>
  );
};
