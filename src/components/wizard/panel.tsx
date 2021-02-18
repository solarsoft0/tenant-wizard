import * as React from 'react';

import { useWizard } from './wizardSteps';
import { FormPanel } from './wizard.styled';

export interface IPanelProps {
  stepIndex: number;
}

export const Panel: React.FC<IPanelProps> = ({ stepIndex, children }) => {
  const { activeTab } = useWizard();

  // Render if active
  return activeTab === stepIndex ? <FormPanel isActive>{children}</FormPanel> : null;
};
