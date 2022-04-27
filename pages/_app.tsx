/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import GraphQLProvider from '@/apollo';
import '@/locales';

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Theme {}
}

const theme = createTheme({
  typography: {
    fontFamily:
      '"ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        height: '100%',
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GraphQLProvider>
          <Component {...pageProps} />
        </GraphQLProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
