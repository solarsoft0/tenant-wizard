import React, { Suspense } from 'react';

import { Loader } from 'components/loadingPanel';
import RouteConfigComponent from './app.routes';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouteConfigComponent />
    </Suspense>
  );
};

export default App;
