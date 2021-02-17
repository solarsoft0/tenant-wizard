import * as React from 'react';

import { Panel, IPanelProps } from './panel';
import { IStepperProps, Stepper } from './stepper';
import { RegisterForm } from './registerForm';
import { BaseButton } from '../atoms/baseButton';
import { ActionButtonWrapper } from './wizard.styled';

interface IWizardContext {
  activeTab: number;
  isFirst: boolean;
  isLast: boolean;
  totalSteps: number;
  setIsNextEnabled: (value: boolean) => void;
  setActiveTab: (nextIndex: number) => void;
  handleOnNext: () => void;
  handleOnPrevious: () => void;
  handleOnSubmit: () => void;
  actionButtons: () => JSX.Element;
}

interface IWizardComposition {
  Panel: React.FC<IPanelProps>;
  Stepper: React.FC<IStepperProps>;
  Form: React.FC<unknown>;
}

const TabsContext = React.createContext<IWizardContext | undefined>(undefined);

/**
 * This component maintains internal state and provides those
 * pieces of state & functions to its children.
 */
const WizardSteps: React.FC<{ totalSteps: number }> & IWizardComposition = ({
  children,
  totalSteps,
}) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [isNextEnabled, setIsNextEnabled] = React.useState(false);

  // Handles next panel trigger
  const handleOnNext = () => {
    if (activeTab < totalSteps && isNextEnabled) {
      setActiveTab(activeTab + 1);
      setIsNextEnabled(false);
    }
  };

  // Handles previous panel trigger
  const handleOnPrevious = () => {
    // Enable next button
    setIsNextEnabled(true);
    // If it's not the first tab, move to the previous tab
    if (activeTab > 0) setActiveTab(activeTab - 1);
  };

  // Handles on Submit Form
  const handleOnSubmit = () => {
    console.log('Info Submitted');
    // TODO: Simulate API call
  };

  // Render Next/Previous action buttons
  const actionButtons = () => (
    <ActionButtonWrapper isFirst={activeTab === 0}>
      {activeTab !== 0 && <BaseButton onClick={handleOnPrevious}>Previous</BaseButton>}
      <BaseButton type={activeTab === totalSteps ? `submit` : `button`} onClick={handleOnNext}>
        {activeTab === totalSteps ? `Submit` : `Next`}
      </BaseButton>
    </ActionButtonWrapper>
  );

  // Memoize the context to prevent unecessary renders.
  const memoizedContextValue = React.useMemo(
    () => ({
      activeTab,
      setActiveTab,
      handleOnNext,
      handleOnPrevious,
      handleOnSubmit,
      isFirst: activeTab === 0,
      isLast: activeTab === totalSteps,
      totalSteps,
      actionButtons,
      setIsNextEnabled,
    }),
    [activeTab, setActiveTab, isNextEnabled, setIsNextEnabled],
  );

  // Provide wizard context
  return <TabsContext.Provider value={memoizedContextValue}>{children}</TabsContext.Provider>;
};

/**
 * This Context hook allows our child components to easily reach
 * into the Wizard context and get the data it needs
 */
export const useWizard = (): IWizardContext => {
  const context = React.useContext(TabsContext);

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
