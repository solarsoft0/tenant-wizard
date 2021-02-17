import React from 'react';
import { ITenant, TenantActions } from './tenantTypes';

interface ITenantcontext {
  tenant: ITenant;
  setTenant: React.Dispatch<TenantActions>;
}

// Tenant registration state
export const TenantContext = React.createContext<ITenantcontext | undefined>(undefined);

/**
 * This Context hook allows our child components to easily reach
 * into the Tenant context and get the data it needs
 */
export const useTenantContext = (): ITenantcontext => {
  const context = React.useContext(TenantContext);

  // Makes sure the component is used within a WizardSteps component
  if (!context) {
    throw new Error('This component must be used within a <TenantContext.Provider/> component.');
  }

  return context;
};
