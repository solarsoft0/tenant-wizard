import React, { Suspense } from 'react';
import styled from 'styled-components';

import { Loader } from 'components/loadingPanel';
import { GlobalStyles } from 'assets/theme/GlobalStyles';
import CustomProvider from 'assets/theme/CustomProvider';
import RouteConfigComponent from './app.routes';

const AppWrapper = styled.div`
  font-family: 'Inter';
  background-color: ${({ theme }) => theme.colors.white};
`;

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <CustomProvider>
        <AppWrapper>
          <RouteConfigComponent />
        </AppWrapper>
      </CustomProvider>
    </Suspense>
  );
};

export default App;
