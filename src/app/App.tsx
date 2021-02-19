import React from 'react';

import Root from './root';
import { GlobalStyles } from 'assets/theme/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Root />
    </>
  );
};

export default App;
