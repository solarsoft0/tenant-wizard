import * as React from 'react';

import { useWizard } from './wizardSteps';
import { ActionButtonWrapper, FormPanel } from './wizard.styled';
import { BaseButton } from 'components/atoms';

export interface IPanelProps {
  stepIndex: number;
}

export const Panel: React.FC<IPanelProps> = (props) => {
  const { activeTab, handleOnNext, handleOnPrevious, isFirst, isLast } = useWizard();

  // Group action button wrapper props for esthetics purposes
  const actionButtonsProps = {
    isFirst,
    isLast,
  };

  return activeTab === props.stepIndex ? (
    <FormPanel isActive>
      {props.children}
      <ActionButtonWrapper {...actionButtonsProps}>
        {!isFirst && <BaseButton onClick={handleOnPrevious}>Previous</BaseButton>}
        {!isLast && <BaseButton onClick={handleOnNext}>Next</BaseButton>}
      </ActionButtonWrapper>
    </FormPanel>
  ) : null;
};
