import { ETenantAction } from 'modules/tenantForm/tenantTypes';
import React, { Suspense } from 'react';

import { LoadingPanel } from 'components/atoms';
import CustomProvider from 'assets/theme/CustomProvider';
import RouteConfigComponent from './app.routes';
import { ITenant, TenantActions } from 'modules/tenantForm/tenantTypes';
import { TenantContext } from 'modules/tenantForm/tenantContext';

// Handle the tenant registration state
export const tenantReducer = (state: ITenant, action: TenantActions): ITenant => {
  switch (action.type) {
    case ETenantAction.UPDATE_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: { ...action.payload },
      };
    case ETenantAction.UPDATE_SALARY_INFO:
      return {
        ...state,
        financialsInfo: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

const Root: React.FC = () => {
  // Tenant Reducer
  const [tenant, setTenant] = React.useReducer(tenantReducer, {});

  // Memoize the context to prevent unecessary renders.
  const memoizedContextValue = React.useMemo(
    () => ({
      tenant,
      setTenant,
    }),
    [tenant],
  );

  return (
    <CustomProvider>
      <Suspense fallback={<LoadingPanel />}>
        <TenantContext.Provider value={memoizedContextValue}>
          <RouteConfigComponent />
        </TenantContext.Provider>
      </Suspense>
    </CustomProvider>
  );
};

export default Root;
