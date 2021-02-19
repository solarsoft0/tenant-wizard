import * as React from 'react';

import { Panel, IPanelProps } from './panel';
import { IStepperProps, Stepper } from './stepper';
import { RegisterForm } from './registerForm';
import { BaseButton } from '../atoms';
import { ActionButtonWrapper } from './wizard.styled';

interface IWizardContext {
  activeTab: number;
  isFirst: boolean;
  isLast: boolean;
  totalSteps: number;
  setActiveTab: (nextIndex: number) => void;
  handleOnPrevious: () => void;
  onWizardSubmit: () => void;
  actionButtons: (validate?: () => boolean) => JSX.Element;
}

interface IWizardComposition {
  Panel: React.FC<IPanelProps>;
  Stepper: React.FC<IStepperProps>;
  Form: React.FC<unknown>;
}

const WizardContext = React.createContext<IWizardContext | undefined>(undefined);

/**
 * This component maintains internal state and provides those
 * pieces of state & functions to its children.
 */
const WizardSteps: React.FC<{ totalSteps: number; onWizardSubmit: () => void }> &
  IWizardComposition = ({ children, totalSteps, onWizardSubmit }) => {
  // Define state for the active tab
  const [activeTab, setActiveTab] = React.useState(0);

  // Handles next panel trigger
  const handleOnNext = () => {
    if (activeTab < totalSteps) setActiveTab(activeTab + 1);
  };

  // Handles previous panel trigger
  const handleOnPrevious = () => {
    // If it's not the first tab, move to the previous tab
    if (activeTab > 0) setActiveTab(activeTab - 1);
  };

  // Render Next/Previous action buttons
  const actionButtons = (validate?: () => boolean) => {
    const onNext = () => {
      // no validation function, route to next page
      if (!validate) handleOnNext();

      // run validation function and route if successfull
      if (validate && validate()) handleOnNext();
    };

    // Render the stepper action buttons
    return (
      <ActionButtonWrapper isFirst={activeTab === 0}>
        {activeTab !== 0 && (
          <BaseButton onClick={handleOnPrevious} outlined>
            Previous
          </BaseButton>
        )}
        <BaseButton type={activeTab === totalSteps ? `submit` : `button`} onClick={onNext}>
          {activeTab === totalSteps ? `Submit` : `Next`}
        </BaseButton>
      </ActionButtonWrapper>
    );
  };

  // Memoize the context to prevent unecessary renders.
  const memoizedContextValue = React.useMemo(
    () => ({
      activeTab,
      setActiveTab,
      handleOnNext,
      handleOnPrevious,
      onWizardSubmit,
      isFirst: activeTab === 0,
      isLast: activeTab === totalSteps,
      totalSteps,
      actionButtons,
    }),
    [activeTab, setActiveTab],
  );

  // Provide wizard context
  return <WizardContext.Provider value={memoizedContextValue}>{children}</WizardContext.Provider>;
};

/**
 * This Context hook allows our child components to easily reach
 * into the Wizard context and get the data it needs
 */
export const useWizard = (): IWizardContext => {
  const context = React.useContext(WizardContext);

  // Makes sure the component is used within a WizardSteps component
  if (!context) {
    throw new Error('This component must be used within a <WizardSteps> component.');
  }

  return context;
};

WizardSteps.Panel = Panel;
WizardSteps.Stepper = Stepper;
WizardSteps.Form = RegisterForm;

export { WizardSteps };
