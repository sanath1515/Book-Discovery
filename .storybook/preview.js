import { ThemeProvider } from '@material-ui/core';
import baseTheme from '../src/theme/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={baseTheme}>
      <Story />
    </ThemeProvider>
  ),
];
