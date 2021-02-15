import React from 'react';
import { ThemeProvider } from 'styled-components';

import LightTheme from './LightTheme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      primary: string;
      lightGray: string;
      darkGray: string;
      red: string;
      yellow: string;
    };
    fonts: string[];
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}

const CustomProvider: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
);

export default CustomProvider;
