import * as React from 'react';
import { Step, IStepProps } from './step';
import { Panel, IPanelProps } from './panel';
import { IStepperProps, Stepper } from './stepper';

interface IWizardContext {
  activeTab: number;
  isFirst: boolean;
  isLast: boolean;
  totalSteps: number;
  setActiveTab: (nextIndex: number) => void;
  handleOnNext: () => void;
  handleOnPrevious: () => void;
}

interface IWizardComposition {
  Step: React.FC<IStepProps>;
  Panel: React.FC<IPanelProps>;
  Stepper: React.FC<IStepperProps>;
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

  // Handles next panel trigger
  const handleOnNext = () => {
    if (activeTab < totalSteps) setActiveTab(activeTab + 1);
  };

  // Handles previous panel trigger
  const handleOnPrevious = () => {
    if (activeTab > 0) setActiveTab(activeTab - 1);
  };

  // Memoize the context to prevent unecessary renders.
  const memoizedContextValue = React.useMemo(
    () => ({
      activeTab,
      setActiveTab,
      handleOnNext,
      handleOnPrevious,
      isFirst: activeTab === 0,
      isLast: activeTab === totalSteps,
      totalSteps,
    }),
    [activeTab, setActiveTab],
  );

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

WizardSteps.Step = Step;
WizardSteps.Panel = Panel;
WizardSteps.Stepper = Stepper;

export { WizardSteps };
