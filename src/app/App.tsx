import React, { Suspense } from 'react';

import { LoadingPanel } from 'components/atoms';
import { GlobalStyles } from 'assets/theme/GlobalStyles';
import CustomProvider from 'assets/theme/CustomProvider';
import RouteConfigComponent from './app.routes';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <CustomProvider>
        <Suspense fallback={<LoadingPanel />}>
          <RouteConfigComponent />
        </Suspense>
      </CustomProvider>
    </>
  );
};

export default App;
